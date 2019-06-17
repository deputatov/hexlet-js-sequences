export const map = (func, elements) => {
    const iter = (i, l) => {
        if (isEmpty(i)) {
            return l
        }
        return iter(tail(i), cons(func(head(i)), l))
    }
    return iter(reverse(elements), l())
}

export const mirror = elements => map(element => node(getName(element), reverseStr(getValue(element))), elements)