const getFlattenList = (list) => {
    return reduce((element, acc) => {
        if (isList(element)) {
            acc = concat(getFlattenList(element), acc)
        } else {
            acc = cons(element, acc)
        }
        return acc
    }, l(), list)
}

const getFlattenListV2 = (list) => reduce((element, acc) => {
    return isList(element) ? concat(getFlattenListV2(element), acc) : cons(element, acc)
}, l(), list)

const flatten = (list) => {
    return reverse(getFlattenListV2(list))
}

export default flatten

const flatten = (list) => {
    const iter = (elements, accumulator) =>
        reduce((element, acc) =>
            (!isList(element) ? cons(element, acc) : iter(element, acc)), accumulator, elements);

    return reverse(iter(list, l()));
};

export default flatten;