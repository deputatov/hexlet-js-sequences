const select = (tagName, elements) => {
    const predicate = (element, acc) => {
        if (hasChildren(element)) {
            acc = concat(select(tagName, children(element)), acc)
        }
        if (is(tagName, element)) {
            acc = consList(element, acc)
        }
        return acc
    }
    return reduce(predicate, l(), elements)
}
export default select;

const select = (tagName, html) => reduce((element, acc) => {
    const acc2 = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
    return is(tagName, element) ? consList(element, acc2) : acc2;
}, l(), html);

export default select;