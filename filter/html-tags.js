export const filter = (func, elements) => {
    let revElements = reverse(elements)
    let list = l()
    while (!isEmpty(revElements)) {
        let current = head(revElements)
        if (func(current)) {
            list = cons(current, list)
        }
        revElements = tail(revElements)
    }
    return list
}
export const quotes = (elements) => map(getValue, filter(elem => is('blockquote', elem), elements))

export const filter = (func, elements) => {
    const iter = (items, acc) => {
        if (isEmpty(items)) {
            return reverse(acc);
        }
        const item = head(items);
        const newAcc = func(item) ? cons(item, acc) : acc;
        return iter(tail(items), newAcc);
    };

    return iter(elements, l());
};