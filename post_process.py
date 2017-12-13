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
            pos.append(val['positive'])
            neg.append(val['negative'])
            id.append(string.replace(string.replace(val['id'], '<urn:uuid:', '', 1), '>', '', 1))
            index.append(val['index'])
            length.append(val['length'])

        pos_val = round(random.uniform(0, 1), 5)

        new_entity['p'] = pos_val
        new_entity['n'] = 1 - pos_val
        new_entity['t'] = entity['values'][0]['type']
        new_entity['x'] = id
        new_entity['i'] = index
        new_entity['l'] = length

        result.append(new_entity)

    with open('data.json', 'w') as f:
        json.dump(result, f, separators=(',', ':'))