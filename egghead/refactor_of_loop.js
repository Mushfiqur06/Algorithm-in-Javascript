// function counter(n) {
//     console.log(n)
//     if (n === 10) {
//         return
//     }
//     return counter(n + 1)
// }

// counter(0)

const items = [[1, 2, 3], [4, 5, [6]]]

function findSiz(i) {
    let hasSix = 'No'
    i.forEach(a => {
        if (a === 6) {
            hasSix = 'Yes'
        }
        console.log(Array.isArray(a))
        if (Array.isArray(a)) {

            hasSix = findSiz(a)
        }
    });
    return hasSix;
}

console.log(findSiz(items))