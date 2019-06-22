export default (elements) => {
    return filter(element => Math.abs(head(elements) % 2) === Math.abs(element % 2), elements)
}