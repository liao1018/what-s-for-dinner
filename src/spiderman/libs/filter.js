import moment from 'moment-timezone';

function match({ list, key, value }) {
  if (value === '') return list;

  return list.filter(
    (item) => item[key] === value,
  );
}

function matchStringDynamic({ list, key, value }) {
  if (value === '') return list;

  return list.filter(
    (item) => item[key].slice(0, value.length) === value,
  );
}

function dateRange({ list, key, value }) {
  let filteredList = list;
  if (value.start !== '') {
    filteredList = filteredList.filter(
      (item) => moment(moment(item[key]).format('YYYY-MM-DD')).isSameOrAfter(value.start),
    );
  }

  if (value.end !== '') {
    filteredList = filteredList.filter(
      (item) => moment(moment(item[key]).format('YYYY-MM-DD')).isSameOrBefore(value.end),
    );
  }

  return filteredList;
}

function include({ list, key, value }) {
  if (value === '') return list;

  return list.filter(
    (item) => item[key].includes(value),
  );
}

export default {
  match,
  matchStringDynamic,
  dateRange,
  include,
};
