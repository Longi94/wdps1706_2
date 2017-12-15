from sentiment import _predict, _init
import json
import os

"""
This script allows to process any type of text placed in ./texts directory
"""

INPUT_PATH = "./texts/"
OUTPUT_PATH = './output/'
MODEL_PATH = './output/model/'

if __name__ == "__main__":
  _init(MODEL_PATH)
  result_arr = []
  no = 0 
  for filename in os.listdir(INPUT_PATH):
    with open(INPUT_PATH + filename, 'rb') as fp:
      line = fp.readline()
      print "starting to parse " + filename
      while line:
        no += 1
        print "line " , no 
        print line

        if len(line) < 1:
        	line = fp.readline()
        	continue

        try:
        	result = _predict(line)
        except:
        	line = fp.readline()
        	continue

        print "result: negative: ", result[0], "positive: ", result[1]

        #saving only positive values (they add to 1)
        result_arr.append(str(result[1]))

        line = fp.readline()

  print("Finalizing")
  result = {}
  result["result"] = result_arr
  print("saving to file")
  with open(OUTPUT_PATH + 'result.json', 'w') as outfile:
    json.dump(result_arr, outfile)
  print("saved!")
