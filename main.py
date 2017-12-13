from sentiment import _predict, _init
import json
import os

# Step1 load the model with _init()
# Step2 Iterate through inputs and pass sentences to _predict()
# Note that sentence will accept just one sentence. So it should be the sentence of that entity
# we could ommit it and just pass the entity too (it's just a string, it can be whatever),
# but results would be much less accurate 
# Step3 write the output of _predict to a json file


INPUT_PATH = "./entities/"
OUTPUT_PATH = './output/'
MODEL_PATH = './output/model/'

if __name__ == "__main__":
  _init(MODEL_PATH)
  final_dict = {}
  no = 0 
  for filename in os.listdir(INPUT_PATH):
    with open(INPUT_PATH + filename, 'rb') as fp:
      line = fp.readline()
      print "starting to parse " + filename
      while line:
        no += 1
        print "line " , no 
        json_obj = json.loads(line)
        for obj in json_obj["sents"]:
          try:
            result = _predict(obj["text"])
          except:
            result = [0, 0]
          for entity in obj["ents"]:
            entity_name = entity["name"]
            if entity_name not in final_dict:
              values = {}
              mid_dict = {}
              mid_dict["values"] = []
              mid_dict["name"] = entity_name
              values["negative"] = str(result[0])
              values["positive"] = str(result[1])
              values["type"] = entity["type"]
              values["id"] = json_obj["id"]

              if "index" in obj:
                values["index"] = obj["index"]
              if "length" in obj:
                values["length"] = obj["length"]

              if result[0] + result[1] == 0:
                values['skip'] = True

              mid_dict["values"].append(values)
              final_dict[entity_name] = mid_dict

            else:
              values = {}
              values["negative"] = str(result[0])
              values["positive"] = str(result[1])
              values["type"] = entity["type"]
              values["id"] = json_obj["id"]

              if "index" in obj:
                values["index"] = obj["index"]
              if "length" in obj:
                values["length"] = obj["length"]

              if result[0] + result[1] == 0:
                values['skip'] = True

              final_dict[entity_name]["values"].append(values)

        line = fp.readline()
  print("Finalizing")
  final_arr = []
  for value in final_dict.values():
    final_arr.append(value)
  print("saving to file")
  with open(OUTPUT_PATH + 'data.json', 'w') as outfile:
    json.dump(final_arr, outfile)
  print("saved!")
