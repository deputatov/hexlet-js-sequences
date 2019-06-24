const isNotSafety = (q1, q2) => {
  const x1 = car(q1)
  const x2 = car(q2)
  const y1 = cdr(q1)
  const y2 = cdr(q2)
  return x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2)
}

const getCoordinatesOfAllQueens = (items, acc, counter) => {
  if (isEmpty(items)) {
    return reverse(acc)
  }
  return getCoordinatesOfAllQueens(tail(items), consList(cons(head(items), counter), acc), counter + 1)
}

const isSafeQueens = (list) => {
  const coordinatesOfAllQueens = getCoordinatesOfAllQueens(list, l(), 1)

  const iter = (items, acc) => {
    if (isEmpty(tail(items)) || acc === false) {
      return acc
    }

    const resRed = reduce((elem, acc) => {
      if (isNotSafety(head(items), elem)) {
        acc = true
        return acc
      } else {
        return acc > false
      }
    }, false, tail(items))

    if (resRed) {
      return false
    }

    return iter(tail(items), true)
  }
  return iter(coordinatesOfAllQueens, true)
}
export default isSafeQueens

const isSafeQueens = (list) => {
  if (isEmpty(list)) {
    return true;
  }
  const y1 = head(list);
  const checkSafe = reduce(
    (y2, x) => (!x || y1 === y2 || Math.abs(y1 - y2) === x ? false : x + 1),
    1,
    tail(list),
  );
  return checkSafe ? isSafeQueens(tail(list)) : false;
};
export default isSafeQueens;