import json
import sys
import string
import random

result = []


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

        if is_number(entity['name']) and entity['values'][0]['type']:
            continue

        new_entity = {'a': entity['name']}
        pos = []
        neg = []
        id = []
        index = []
        length = []

        for val in entity['values']:
            pos_val = round(random.uniform(0, 1), 5)
            pos.append(pos_val)
            neg.append(round(1 - pos_val, 5))
            id.append(string.replace(string.replace(val['id'], '<urn:uuid:', '', 1), '>', '', 1))
            index.append(val['index'])
            length.append(val['length'])

        new_entity['p'] = pos
        new_entity['n'] = neg
        new_entity['pa'] = round(sum(pos) / float(len(pos)), 5)
        new_entity['na'] = round(sum(neg) / float(len(neg)), 5)
        new_entity['t'] = entity['values'][0]['type']
        new_entity['x'] = id
        new_entity['i'] = index
        new_entity['l'] = length

        result.append(new_entity)

    with open('data.json', 'w') as f:
        json.dump(result, f, separators=(',', ':'))