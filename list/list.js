const has = (list, element) => {
    if (isEmpty(list)) {
        return false
    }
    return head(list) === element ? true : has(tail(list), element)
}

const reverse = (list) => {
    const iter = (l, rl) => isEmpty(l) ? rl : iter(tail(l), cons(head(l), rl))
    return iter(list, l())
}

const concat = (list1, list2) => {
    if (isEmpty(list1)) {
        return list2
    }
    return concat(tail(list1), cons(tail(list1), list2))
}

const concat = (list1, list2) => {
    if (isEmpty(list2)) {
        return list1
    }
    return concat(cons(list1, l(head(list2))), tail(list2))
}