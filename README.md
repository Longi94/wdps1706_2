# wdps1706 - part 2

# Run 

  - Extract twitter sentiment dataset and place it in the root directory 
  - Extract the tensorflow model and place it inside `./output`

The result should look like: 
```
/
-  [source python files]
-  /twitter-sentiment-dataset/
-  /output
-  -  /model
```
# Details

## Extracting the text
1) The WARC file(s) is loaded into Spark by splitting the file into WARC
records. Since compressed files cannot be partitioned before
decompressing the whole file, the RDD created by Spark is repartitioned.
2) Spark reads through the whole file and HTML code is detected just by
looking for a line starting with `<!DOCTYPE HTML`.
3) With the [Jsoup](https://github.com/jhy/jsoup) Java library useless
tags that definitely contain no useful text (e.g. script, link or svg)
are removed to make processing faster.
4) The [boilerpipe](https://github.com/robbypond/boilerpipe) Java
library is used to extract text from HTML strings. We noticed that
there were cases where there was escaped HTMLcode inside the website.
These were found to be inside `summary` and`figcaption` tags and were
handled when extracting the text.
5) The output is the identifier of the web page and the corresponding
extracted text. Identifiers with empty text are thrown away.

## Pre-processing
This stage is done using the Apache openNLP tools.
Used tools:
- Sentence Detector
- Language Detector
- Tokenizer
- POS Tagger
- Lemmatizer
- Name Finder (NER)

Tools are based on already pre-trained models that are available here: http://opennlp.sourceforge.net/models-1.5/

1) Input text is being divided into sentences by Sentence Detector Tool.
2) The sentences are filtered to try to remove non English words whenever possible. Only sentences recognized as english take into account for further processing.
3) Each senctence is being tokenized by Tokenizer Tool.
4) Tokenized sentence is then passed to the Part Of Speech Tagger.
5) To improve efficiency of NER, tokens are being lemmatized by Lemmatizer Tool (based on POS Tags as well).
6) Lemmatizer in not efficient enough and not all tokens are lemmatized successfully - in that situation we keep original tokens.
7) Lemmas (and tokens) are being passed to Name Finder Tool that provides Name Entity Recogition. As a result we receive a set of recognized entities for each sentence.
8) Each processed sentence is being wrapped with recognized entities and placed in a result list of wrappers that are passed for further processing. The output from this is a json file with the WARC ID for each warc file, and the list of sentences and entities in those sentences for that warc file.

## Sentiment Analysis 

