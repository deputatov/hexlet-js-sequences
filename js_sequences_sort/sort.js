const sort = (elements) => {
    if (isEmpty(elements)) {
        return l()
    }
    let pivot = head(elements)
    let lList = filter(element => element < pivot, tail(elements))
    let rList = filter(element => element >= pivot, tail(elements))
    return concat(sort(lList), cons(pivot, sort(rList)))
}
export default sort

const sort = (list) => {
    if (isEmpty(list)) {
        return l();
    }

    const divisor = head(list);
    const rest = tail(list);

    const left = filter(value => value <= divisor, rest);
    const right = filter(value => value > divisor, rest);

    return concat(sort(left), cons(divisor, sort(right)));
};

export default sort;