const take = (n, list) => n == 0 || isEmpty(list) ? l() : cons(head(list), take(n - 1, tail(list)))
export default take;