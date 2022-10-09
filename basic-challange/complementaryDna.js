// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

const convert = (dna) => {
    let newArr = []
    let tmp = dna.split('').map(e => {
      if(e == 'A') {
        newArr.push('T')
      }
      if(e == 'T') {
        newArr.push('A')
      }
      if(e == 'C') {
        newArr.push('G')
      }
      if(e == 'G') {
        newArr.push('C')
      }
    })
    
    return newArr.join('')
  }
  let str = 'AAAC'
  let str = 'ATTGC'
  let str = 'GTAT'

  console.log(convert(str))