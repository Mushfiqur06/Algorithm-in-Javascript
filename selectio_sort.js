let arr = [6, 10, 13, 5, 8, 3, 2, 11]
console.log("Before the Sorted: " + arr)

function selection_sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min_val = arr[i];
        let min_idx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min_val) {
                min_val = arr[j]
                min_idx = j;
            }
        }
        let temp = arr[i]
        arr[i] = arr[min_idx]
        arr[min_idx] = temp
    }

    return arr;
}

console.log("After The Sorted: ");
console.log(selection_sort(arr))