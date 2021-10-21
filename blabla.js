const pattern = [
    [2, 4, 5],
    [1, 3, 4, 5, 6],
    [2, 4, 5, 6],
    [1, 2, 5, 7, 8],
    [1, 2, 3, 4, 6, 7, 8, 9],
    [2, 3, 5, 8, 9],
    [4, 5, 8],
    [4, 5, 6, 7, 9],
    [5, 6, 8]
]

const validate = (num) => {
    if (num.length > 7) {
        return false
    }

    if (num.length < 5) {
        return false
    }
    
    return true
}

const comparePattern = (a, b) => {
    let state = false
    if (pattern[a-1].includes(parseInt(b))) {
        state = true
    }else{
        state = false
    }
    return state
}

const solution = (input) => {
    
    console.log("Input : ", input)
    let state = false
    
    if (validate(input)) {
        let split = input.split("")
        let t = 1

        for (let i = 0; i < split.length; i++) {
            if (split.length > t) {
                state = comparePattern(split[i], split[t])
                t++
            }
        }
    }

    return state ? "#YA" : "#TIDAK"
}

console.log(solution("12321"))
console.log(solution("23654789"))
console.log(solution("512369"))
