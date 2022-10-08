// Given a non-negative integer n, 
// write a function to_binary/ToBinary which returns that number in a binary format.

const to_binary = (n) => {
    // easiest way convert to binary
    // return +n.toString(2)
    let bin = ""
    if(n < 0) return 'Must positive integer n'
    if(n === 1) return 1
    while (n > 0) {
        if( n % 2 == 1) {
            bin = "1" + bin
        } else {
            bin = "0" + bin
        }
        n = Math.floor(n / 2)
    }
    return bin
}

let dec = 10
console.log(to_binary(dec))

// step by step 
// 1. jika n == 1 maka akan mengembalikan nilai tersebut
// 2. jika n angka negatif maka akan dikembalikan string "harus bernilai integer positif"
// 3. perulangan secara terus menerus selagi n lebih dari 0
// 4. jika nilai n di modulo 2 == 1 maka akan memasukkan binary bernilai 1 pada varible bin
// 5. jika !== 1 maka akan memasukkan nilai berupa 0 ke variable bin
// 6. nilai n akan dibagi 2 dan dibulatkan ke nilai integer floor agar