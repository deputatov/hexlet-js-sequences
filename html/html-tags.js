export const node = (name, body) => cons(name, body)
export const getName = (tag) => car(tag)
export const getValue = (tag) => cdr(tag)

export const append = (htmlList, tag) => consList(tag, htmlList)
export const toString = (htmlList) => {
    const iter = (l, txt) => isEmpty(l) ? txt : iter(tail(l), `<${getName(head(l))}>${getValue(head(l))}</${getName(head(l))}>` + txt)
    return iter(htmlList, "")
}