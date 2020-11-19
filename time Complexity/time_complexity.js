let even = []
let n = 100;
let input = 55;

for (let i = 0; i < n; i++) {
    even[i] = 0
}
for (let j = 0; j < n; j += 2) {
    even[j] = 1
}

if (even[input]) {
    console.log("Input is Even Number")
} else {
    console.log("Input Odd Number")
}

console.log(even)