let num = [5, 8, 2, 9, 3]
num.push(1, 7)
num.sort()
/*num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(num[3])*/
/*for (let pos = 0;pos < num.length;pos++) {
    console.log(num[pos])
}*/
let pos = num.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`o valor 3 está na posição ${pos}`)
}