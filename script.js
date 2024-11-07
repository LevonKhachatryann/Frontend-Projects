const arr = [4, 2, 5, 74, 1, 6, 11];
let x;
let reapet = true;
let krug = 0;

while (reapet) {
    reapet = false;
    if (krug === 0) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr);
            if (arr[i] > arr[i + 1]) {
                x = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = x
                reapet = true
                krug = 1
            }
        }
    }
    else {
        for (let i = arr.length - 1; i >= 0; i--) {
            console.log(arr);
            if (arr[i] < arr[i - 1]) {
                x = arr[i]
                arr[i] = arr[i - 1]
                arr[i - 1] = x
                reapet = true
                krug = 0
            }
        }
    }

}


console.log(arr);