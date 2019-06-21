export const extractHeaders = (html) => {
  const filtered = filter(element => is('h2', element), html)
  const result = map(element => node('p', getValue(element)), filtered)
  return result
}

export const wordsCount = (tagName, word, html) => {
  const predicate = element => is(tagName, element)
  const func = (element, acc) => (predicate(element) ? acc += wc(word, getValue(element)) : acc)
  return reduce(func, 0, html)
}

export const extractHeaders = (elements) => {
  const filtered = filter(element => is('h2', element), elements);
  return map(element => node('p', getValue(element)), filtered);
};

export const wordsCount = (tagName, word, elements) => {
  const filtered = filter(element => is(tagName, element), elements);
  const values = map(element => getValue(element), filtered);
  return reduce((text, acc) => wc(word, text) + acc, 0, values);
};