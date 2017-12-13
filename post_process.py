import json
import sys
import string
import random

result = {}


def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        pass
    return False


with open(sys.argv[1], 'r') as file:
    data = json.load(file)

    for entity in data:

        if is_number(entity['name']) and entity['values'][0]['type'] == 'person':
            continue

        for val in entity['values']:
            name = entity['name'].upper()
            type = val['type']

            if (name, type) not in result:
                result[name, type] = {'a': name, 't': type, 'p': [], 'n': [], 'x': [], 'i': [], 'l': []}

            pos_val = round(random.uniform(0, 1), 5)
            result[name, type]['p'].append(pos_val)
            result[name, type]['n'].append(round(1 - pos_val, 5))
            result[name, type]['x'].append(string.replace(string.replace(val['id'], '<urn:uuid:', '', 1), '>', '', 1))
            result[name, type]['i'].append(val['index'])
            result[name, type]['l'].append(val['length'])

    values = result.values()

    for val in values:
        val['pa'] = round(sum(val['p']) / float(len(val['p'])), 5)
        val['na'] = round(sum(val['n']) / float(len(val['n'])), 5)

    with open('data.json', 'w') as f:
        json.dump(values, f, separators=(',', ':'))
