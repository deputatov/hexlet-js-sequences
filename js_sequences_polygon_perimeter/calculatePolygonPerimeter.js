const calculateDistance = (p1, p2) => {
    return Math.sqrt((getX(p2) - getX(p1)) ** 2 + (getY(p2) - getY(p1)) ** 2)
}

export default (points) => {
    if (isEmpty(points)) {
        return null
    }
    const iter = (items, acc, counter) => {
        if (isEmpty(tail(items))) {
            return counter + 1 < 3 ? null : acc + calculateDistance(head(points), head(items))
        }
        return iter(tail(items), acc + calculateDistance(head(items), head(tail(items))), counter + 1)
    }
    return iter(points, 0, 0)
}