function smallest(arr = [10, 100, 7, 8, 2, 4], n) {

    arr.sort(function (a, b) {
        return a - b;
    })
    console.log("1st", arr[0], "2nd", arr[1], "3rd", arr[2], "n", arr[n])
}

smallest(undefined, 5)


function largest(arr = [10, 100, 7, 8, 2, 4], n) {

    arr.sort(function (a, b) {
        return b - a;
    })
    console.log("1st", arr[0], "2nd", arr[1], "3rd", arr[2], "n", arr[n])
}

largest(undefined, 5)


function updateMap(map, key, num) {
    if (map.has(key)) {
        map.set(key, [...map.get(key), num])
    } else {
        map.set(key, [num])
    }
}
function count(arr = [10, 100, 7, 8, 2, 4, -30, -40, 0, 125]) {
    let result = new Map();
    for (num of arr) {
        if (num >= 0) {
            if (num % 2 == 0) {
                updateMap(result, 'even', num)
            } else {
                updateMap(result, 'odd', num)
            }
            if (Number.isInteger(Math.sqrt(num))) {
                updateMap(result, 'perfect square', num)
            }
            if (Math.cbrt(num) * Math.cbrt(num) * Math.cbrt(num) === num) {
                updateMap(result, 'perfect cube', num)
            }
            updateMap(result, 'positive', num)
        } else {
            updateMap(result, 'negative', num)
        }
    }
    console.log(result)
}
count()
function median(arr) {
    if (arr.length % 2 == 0) {
        return arr[(arr.length / 2) - 1] + arr[(arr.length / 2) - 2]
    } else {
        return arr[Math.round((arr.length / 2) - 1)]
    }
}

function findMode(arr) {
    const mode = {};
    let max = 0, count = 0;

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (mode[item]) {
            mode[item]++;
        } else {
            mode[item] = 1;
        }

        if (count < mode[item]) {
            max = item;
            count = mode[item];
        }
    }

    return max;
}
function findRMS(arr) {
    return arr.map(val => (val * val))
        .reduce((acum, val) => acum + val)
        / arr.length
}

function stats(arr = [10, 100, 7, 8, 2, 4, -30, -40, 10, 125, 100]) {
    let result = new Map();
    let sum = 0;
    let product = 1;
    arr.sort(function (a, b) { return a - b })
    for (num of arr) {
        sum += num;
        product *= num;
    }
    updateMap(result, 'sum', sum)
    updateMap(result, 'mean', sum / arr.length)
    updateMap(result, 'median', median(arr))
    updateMap(result, 'mode', findMode(arr))
    updateMap(result, 'rms', findRMS(arr))
    updateMap(result, 'product', product)
    console.log(result)
}
stats()