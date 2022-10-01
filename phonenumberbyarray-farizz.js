function createPhoneNumber(numbers) {
    var result = "";
    numbers.forEach((data, index) => {
        if (index == 0) {
            result += `(${data}`
        } else if (index == 2) {
            result += `${data}) `
        } else if (index == 5) {
            result += `${data}-`
        } else {
            result += data
        }
    })
    return result
}
 createPhoneNumber([1,2,3,4,5,6,7,8,9,0])
