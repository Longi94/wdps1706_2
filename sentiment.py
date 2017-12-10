import tensorflow as tf
import numpy as np
from generic_helpers import *
import os, time, data_helpers, sys

################
##### DATA #####
################

# Hyperparameters

tf.flags.DEFINE_boolean("train", False, "Should the network perform training? (default: False)")
tf.flags.DEFINE_boolean("save", False, "Save session checkpoints (default: False)")
tf.flags.DEFINE_boolean("evaluate_batch", False, "Print the network output on a batch from the dataset (for debugging/educational purposes")
tf.flags.DEFINE_string("load", 'model', "Restore the given session if it exists (Pass the name of the session folder: runYYYMMDD-hhmmss)")
tf.flags.DEFINE_string("custom_input", "", "The program will print the network output for the given input string.")
tf.flags.DEFINE_string("filter_sizes", "3,4,5", "Comma-separated filter sizes for the convolution layer (default: '3,4,5')")
tf.flags.DEFINE_integer("reduced_dataset", 1, "Use 1/[REDUCED_DATASET]-th of the dataset to reduce memory usage (default: 1; uses all dataset)")
tf.flags.DEFINE_integer("embedding_size", 128, "Size of character embedding (default: 128)")
tf.flags.DEFINE_integer("num_filters", 128, "Number of filters per filter size (default: 128)")
tf.flags.DEFINE_integer("batch_size", 100, "Batch Size (default: 100)")
tf.flags.DEFINE_integer("epochs", 3, "Number of training epochs (default: 3)")
tf.flags.DEFINE_integer("valid_freq", 1, "Check model accuracy on validation set [VALIDATION_FREQ] times per epoch (default: 1)")
tf.flags.DEFINE_integer("checkpoint_freq", 1, "Save model [CHECKPOINT_FREQ] times per epoch (default: 1)")
tf.flags.DEFINE_integer("test_data_ratio", 10, "Percentual of the dataset to be used for validation (default: 10)")


# Globals Vars
FLAGS = tf.flags.FLAGS

def log(*string):
    output = ' '.join(string)
    print output

print tf.__version__
def _init(modelPath):
    global sess
    global data_in
    global network_out
    global dropout_keep_prob
    global vocabulary
    global x

    ### Load data ###
    x, y, vocabulary, vocabulary_inv = data_helpers.load_data(100)
    # x, y, vocabulary, vocabulary_inv = data_helpers.load_data(1)

    # Randomly shuffle data
    np.random.seed(123)
    shuffle_indices = np.random.permutation(np.arange(len(y)))
    x_shuffled = x[shuffle_indices]
    y_shuffled = y[shuffle_indices]
    # Split train/test set
    text_percent = FLAGS.test_data_ratio / 100.0
    test_index = int(len(x) * text_percent)
    x_train, x_test = x_shuffled[:-test_index], x_shuffled[-test_index:]
    y_train, y_test = y_shuffled[:-test_index], y_shuffled[-test_index:]

    ### Derived parameters ###
    sequence_length = x_train.shape[1]
    num_classes = y_train.shape[1]
    vocab_size = len(vocabulary)
    filter_sizes = map(int, FLAGS.filter_sizes.split(","))

    ### Session variables ###
    sess = tf.InteractiveSession()

    # --------------------- Building the model
    # Placeholders
    data_in = tf.placeholder(tf.int32, [None, sequence_length], name="data_in")
    dropout_keep_prob = tf.placeholder(tf.float32, name="dropout_keep_prob")

    # Embedding layer
    with tf.name_scope("embedding"):
        W = tf.Variable(tf.random_uniform([vocab_size, FLAGS.embedding_size], -1.0, 1.0), name="embedding_matrix")
        embedded_chars = tf.nn.embedding_lookup(W, data_in)
        embedded_chars_expanded = tf.expand_dims(embedded_chars, -1)

    # Convolution + ReLU + Pooling layer
    pooled_outputs = []
    for i, filter_size in enumerate(filter_sizes):
        with tf.name_scope("conv-maxpool-%s" % filter_size):
            # Convolution Layer
            filter_shape = [filter_size, FLAGS.embedding_size, 1, FLAGS.num_filters]
            W = weight_variable(filter_shape, name="W_conv")
            b = bias_variable([FLAGS.num_filters], name="b_conv")
            conv = tf.nn.conv2d(
                embedded_chars_expanded,
                W,
                strides=[1, 1, 1, 1],
                padding="VALID",
                name="conv")
            # Activation function
            h = tf.nn.relu(tf.nn.bias_add(conv, b), name="relu")
            # Maxpooling layer
            pooled = tf.nn.max_pool(
                h,
                ksize=[1, sequence_length - filter_size + 1, 1, 1],
                strides=[1, 1, 1, 1],
                padding='VALID',
                name="pool")
        pooled_outputs.append(pooled)

    # Combine the pooled feature tensors
    num_filters_total = FLAGS.num_filters * len(filter_sizes)
    h_pool = tf.concat(pooled_outputs, 3)
    h_pool_flat = tf.reshape(h_pool, [-1, num_filters_total])

    # Dropout
    with tf.name_scope("dropout"):
        h_drop = tf.nn.dropout(h_pool_flat, dropout_keep_prob)

    # Output layer
    with tf.name_scope("output"):
        W_out = weight_variable([num_filters_total, num_classes], name="W_out")
        b_out = bias_variable([num_classes], name="b_out")
        network_out = tf.nn.softmax(tf.matmul(h_drop, W_out) + b_out)  # Network output

    # Init tf session
    log("Data processing OK, loading network...")
    saver = tf.train.Saver()
    tf.train.import_meta_graph(modelPath + 'ckpt.ckpt.meta')
    try:
        saver.restore(sess, modelPath + 'ckpt.ckpt')
    except:
        log('##############################################################################')
        log("Couldn't restore the session properly, falling back to default initialization.")
        log('##############################################################################')
        sess.run(tf.global_variables_initializer())
    

def _predict(sentence):
    """
    Translates a string to its equivalent in the integer vocabulary and feeds it to the network.
    Outputs result to stdout.
    """
    log("Evaluating", sentence)
    x_to_eval = data_helpers.string_to_int(sentence, vocabulary, max(len(i) for i in x))
    result = sess.run(tf.argmax(network_out, 1), feed_dict={data_in: x_to_eval, dropout_keep_prob: 1.0})
    unnorm_result = sess.run(network_out, feed_dict={data_in: x_to_eval, dropout_keep_prob: 1.0})
    network_sentiment = "POS" if result == 1 else "NEG"
    log("Custom input evaluation:", network_sentiment)
    log("Actual output:", str(unnorm_result[0]))
    return unnorm_result[0]


############################
##### HELPER FUNCTIONS #####
############################

def weight_variable(shape, name):
    """
    Creates a new Tf weight variable with the given shape and name.
    Returns the new variable.
    """
    var = tf.truncated_normal(shape, stddev=0.1)
    return tf.Variable(var, name=name)


def bias_variable(shape, name):
    """
    Creates a new Tf bias variable with the given shape and name.
    Returns the new variable.
    """
    var = tf.constant(0.1, shape=shape)
    return tf.Variable(var, name=name)


if __name__ == "__main__":
    # should be the name of the folfer containing tf model in output folder 
    _init("./output/model/")
    _predict("Trump is a bad man")