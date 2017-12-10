from sentiment import _predict, _init

# Step1 load the model with _init()
# Step2 Iterate through inputs and pass sentences to _predict()
# Note that sentence will accept just one sentence. So it should be the sentence of that entity
# we could ommit it and just pass the entity too (it's just a string, it can be whatever),
# but results would be much less accurate 
# Step3 write the output of _predict to a json file