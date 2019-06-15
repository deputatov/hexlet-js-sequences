export const has = (list, element) => {
    if (isEmpty(list)) {
        return false
    }
    return head(list) === element ? true : has(tail(list), element)
}

export const reverse = (list) => {
    const iter = (l, rl) => isEmpty(l) ? rl : iter(tail(l), cons(head(l), rl))
    return iter(list, l())
}

export const concat = (list1, list2) => {
    if (isEmpty(list1)) {
        return list2
    }
    return cons(head(list1), concat(tail(list1), list2))
}