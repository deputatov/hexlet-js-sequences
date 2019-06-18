export const reduce = (func, acc, elements) => {
    const iter = (items, adder) => {
        if (isEmpty(items)) {
            return adder
        }
        const item = head(items)
        const newAdder = func(item, adder)
        return iter(tail(items), newAdder)
    }
    return iter(elements, acc)
}

export const emptyTagsCount = (tagName, elements) => {
    return reduce((element, acc) => {
        return is(tagName, element) && getValue(element) === '' ? acc + 1 : acc;
    }, 0, elements)
}

export const reduce = (func, acc, elements) => {
    if (isEmpty(elements)) {
        return acc;
    }

    return reduce(func, func(head(elements), acc), tail(elements));
};

export const emptyTagsCount = (tagName, elements) => {
    const predicate = element => is(tagName, element) && getValue(element) === '';
    const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
    return reduce(func, 0, elements);
};