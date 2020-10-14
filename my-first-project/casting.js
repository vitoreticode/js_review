// parseInt() and parseFloat() 
    // --> Convert numerical string to numbers
// toString()
    // --> Convert numbers to numerical string

let num = '150'

console.log(parseInt('100'))
console.log(parseInt(num))
console.log(parseInt('ABC')) // NaN
console.log(parseInt('0xF')) // Hexadecimal

let float1 = '1.50'

console.log(parseFloat('1.00'))
console.log(parseFloat(float1))
console.log(parseFloat('float1')) // NaN

// Numbers after special characteres are ignored
console.log(parseInt('1.5'))
console.log(parseInt('1 + 1'))

// But using template literals they are not ignored
console.log(parseInt(`${ 1 + 1 }`))

// Convert to String
console.log(num.toString())
console.log(float1.toString())