const array = [ ...Array(100).keys() ].map( i => i + 1);

function binary_search(list, item) {
    let low = 0;
    let high = list.length;
    let middle;
    let isFound = false;

    while (isFound === false && low <= high) {
        debugger
        middle = Math.floor((low + high) / 2);

        if (list[middle] === item) {
            isFound = true;
            return middle + 1;
        }
        if (item < list[middle]) {
            high = middle - 1;
        } else {
            low = middle + 1
        }
    }
    return 'Not found';
}

console.log(array);

console.log(binary_search(array, 24));