module.exports = function reverse(n) {
    if (n < 0) {
        n = -n
    }
    let stringInput = n.toString()
    let result = ""
    for (let i = 0; i < stringInput.length; i++) {
        result = stringInput[i] + result
    }

    return +result
}