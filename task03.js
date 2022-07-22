'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
let newArr =[];

const addPrefix = (arr, prefix) => {
    let newArr =[];

    for (const key in arr) {
        newArr[key] =  prefix + " " + arr[key];
    }
        console.log(newArr);
        return newArr;

}


addPrefix(names, 'Mr')

