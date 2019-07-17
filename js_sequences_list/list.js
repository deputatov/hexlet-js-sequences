export const toString = list => `(${list.replace(new RegExp(delimiter, 'g'), ', ')})`;

export const head = (list) => {
    if (list.indexOf(delimiter) !== -1) {
        return list.slice(0, list.indexOf(delimiter));
    }
    return list;
};

export const tail = (list) => {
    if (list.indexOf(delimiter) !== -1) return list.slice(list.indexOf(delimiter) + 1);
    return l();
};

export const isEmpty = list => list === '';

export const cons = (item, list) => {
    if (isEmpty(list)) return item;
    return l(item, list);
};

const reverse = (list) => {
    const iter = (elements, acc) => {
        if (isEmpty(elements)) return acc;
        return iter(tail(elements), cons(head(elements), acc));
    };
    return iter(list, l());
};

export const filter = (predicate, list) => {
    const iter = (items, acc) => {
        if (isEmpty(items)) {
            return reverse(acc);
        }
        const item = head(items);
        const newAcc = predicate(item) ? cons(item, acc) : acc;
        return iter(tail(items), newAcc);
    };
    return iter(list, l());
};

export const map = (callback, list) => {
    const iter = (items, acc) => {
        if (isEmpty(items)) {
            return reverse(acc);
        }
        return iter(tail(items), cons(callback(head(items)), acc));
    };
    return iter(list, l());
};

export const reduce = (callback, init, list) => {
    if (isEmpty(list)) {
        return init;
    }
    return reduce(callback, callback(head(list), init), tail(list));
};