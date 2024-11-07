const arr = [
    [1, 2, 3, 2],
    [8, 9, 2, 6],
    [10, -3, 5, 4],
    [10, 3, 5, 4],
];

let sum = 0;

for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
        if(i > j){
            sum = sum + arr[i][j]
        }
    }
}

console.log(sum);