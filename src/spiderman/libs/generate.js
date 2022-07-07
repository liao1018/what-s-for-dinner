function valuesArray({ array, key }) {
  const set = new Set();
  array.forEach((item) => {
    set.add(item[key]);
  });

  return Array.from(set);
}

function notEmptyValueObject(object) {
  const output = {};
  Object.entries(object).forEach(([key, value]) => {
    if (value !== '') output[key] = value;
  });

  return output;
}

function objectFromArray({ array, defaultValue = null }) {
  const object = {};
  array.forEach((item) => {
    object[item] = defaultValue;
  });

  return object;
}

function specialCommand(command) {
  const cmd = Buffer.from(JSON.stringify(command)).toString('base64');

  return cmd;
}

function formData(object) {
  const data = new FormData();
  Object.entries(object).forEach(
    ([key, value]) => data.append(key, value),
  );

  return data;
}

function deepCopy(object) {
  return JSON.parse(
    JSON.stringify(object),
  );
}

function timestamp() {
  // Unix Timestamp (到毫秒的版本)
  return new Date().getTime();
}

export default {
  valuesArray,
  notEmptyValueObject,
  objectFromArray,
  specialCommand,
  deepCopy,
  formData,
  timestamp,
};
