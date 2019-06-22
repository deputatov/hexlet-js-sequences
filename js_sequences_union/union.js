const getUniqueList = (list, acc) => reduce((element, acc) => !has(acc, element) ? cons(element, acc) : acc, acc, list)

const union = (list1, list2) => {
    return reverse(getUniqueList(list2, getUniqueList(list1, l())))
}

export default union

const appendUniq = (base, list) => {
    const result = reduce(
        (value, acc) => (has(acc, value) ? acc : cons(value, acc)),
        reverse(base),
        list,
    );
    return reverse(result);
};

export default (list1, list2) => appendUniq(appendUniq(l(), list1), list2);