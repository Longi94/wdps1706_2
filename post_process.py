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

        if entity['name'].upper() in result:
            new_entity = result[entity['name'].upper()]
        else:
            new_entity = {'a': entity['name'].upper(), 'p': [], 'n': [], 'x': [], 'i': [], 'l': []}

        for val in entity['values']:
            pos_val = round(random.uniform(0, 1), 5)
            new_entity['p'].append(pos_val)
            new_entity['n'].append(round(1 - pos_val, 5))
            new_entity['x'].append(string.replace(string.replace(val['id'], '<urn:uuid:', '', 1), '>', '', 1))
            new_entity['i'].append(val['index'])
            new_entity['l'].append(val['length'])

        new_entity['pa'] = round(sum(new_entity['p']) / float(len(new_entity['p'])), 5)
        new_entity['na'] = round(sum(new_entity['n']) / float(len(new_entity['n'])), 5)
        new_entity['t'] = entity['values'][0]['type']

        result[entity['name'].upper()] = new_entity

    with open('data.json', 'w') as f:
        json.dump(result.values(), f, separators=(',', ':'))
