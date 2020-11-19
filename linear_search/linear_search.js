function linear_search(arr, n, x) {
    let i;
    for (i = 0; i < n; i++) {
        if (arr[i] == x) {
            return i;
        }
    }

    i = -1;
    return i;
}
let arr = [60, 34, 45, 25, 92]
let n = arr.length;
let x = 26;

console.log(linear_search(arr, n, x))
