const sort = (elements) => {
    if (isEmpty(elements)) {
        return l()
    }
    let pivot = head(elements)
    let lList = filter(element => element < pivot, tail(elements))
    let rList = filter(element => element >= pivot, tail(elements))
    return concat(sort(lList), cons(pivot, sort(rList)))
}
export default sort