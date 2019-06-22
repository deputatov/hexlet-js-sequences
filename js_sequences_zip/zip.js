export default (list1, list2) => {
    const iter = (items1, items2, result) => {
        if (isEmpty(items1) || isEmpty(items2)) {
            return reverse(result)
        }
        return iter(tail(items1), tail(items2), cons(l(head(items1), head(items2)), result))
    }
    return iter(list1, list2, l())
}