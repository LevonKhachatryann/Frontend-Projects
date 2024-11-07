const arr = [
    [4, 8, 9, 6],
    [8, 7, 3, 8],
    [12, 7, 4, 14],
    [20, 1, 7, 10]
];
let mec;
let arr1 = [];

for (let i = 0; i < arr.length; i++){
    mec = arr[i][0]
    for (let j = 0; j < arr[i].length; j++){
        if(mec < arr[i][j]) mec = arr[i][j]
    }
    arr1 = [...arr1 , mec]
}

console.log(arr1);
