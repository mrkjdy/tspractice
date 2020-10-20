const obj1 = {
  thing1: 'string1',
  thing2: 'string2'
};

const obj2 = {
  thing1: 'aaaaaa',
  thing3: 'string3'
};

const obj3 = {
  ...obj1,
  ...obj2
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

const obj4 = {
  cheenar: ':)',
  david: 'brian'
};

const jeff = {
  david: ':O'
};

const merge = (...objects: Record<string, unknown>[]): Record<string, unknown> => objects.reduce((prev, cur) => ({ ...prev, ...cur }), {});

console.log(merge(obj1, obj2, obj3, obj4, jeff));
