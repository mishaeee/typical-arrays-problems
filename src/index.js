
exports.min = function min(array) {
    if (!Array.isArray(array) || array.length == 0) {
        return 0;
    }
    array.sort((a, b) => a - b);
    return array[0];
}

exports.max = function max(array) {
    if (!Array.isArray(array) || array.length == 0) {
        return 0;
    }
    array.sort((a, b) => a - b);
    return array[array.length - 1];
}

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length == 0) {
        return 0;
    }
    let storage = 0;
    for (let d of array) {
        storage += d;
    }
    return storage / array.length;
}
