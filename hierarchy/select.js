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