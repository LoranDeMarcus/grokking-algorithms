'use strict';

function generateRandomNum(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

const array = Array.from(Array(15), () => generateRandomNum(1, 100));

function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

console.log('generated array: ', array);

console.log('smallest: ', findSmallest(array));

function selectionSort(arr) {
    const newArr = [];
    const length = arr.length

    for (let i = 0; i < length; i++) {
        let smallest = findSmallest(arr);
        newArr.push(arr[smallest]);
        arr.splice(smallest, 1);
    }
    return newArr;
}

console.log('selection sort result: ', selectionSort(array));