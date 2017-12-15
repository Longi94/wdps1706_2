import json
import sys
import string
import os

result = {}


def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        pass
    return False


for filename in os.listdir(sys.argv[1]):
    if not filename.endswith(".json"):
        continue

    with open(sys.argv[1] + '\\' + filename, 'r') as file:
        print('Processing ' + filename)
        data = json.load(file)

        for entity in data:

            if is_number(entity['name']) and entity['values'][0]['type'] == 'person':
                continue

            for val in entity['values']:
                if 'skip' in val and val['skip']:
                    continue

                name = entity['name'].upper()
                type = val['type']

                if (name, type) not in result:
                    result[name, type] = {'a': name, 't': type, 'p': [], 'n': [], 'x': [], 'i': [], 'l': []}

                result[name, type]['p'].append(round(float(val['positive']), 5))
                result[name, type]['n'].append(round(float(val['negative']), 5))
                result[name, type]['x'].append(
                    string.replace(string.replace(val['id'], '<urn:uuid:', '', 1), '>', '', 1))
                result[name, type]['i'].append(val['index'])
                result[name, type]['l'].append(val['length'])

values = result.values()

for val in values:
    val['pa'] = round(sum(val['p']) / float(len(val['p'])), 5)
    val['na'] = round(sum(val['n']) / float(len(val['n'])), 5)

    del val['n']

with open('data.json', 'w') as f:
    json.dump(values, f, separators=(',', ':'))
