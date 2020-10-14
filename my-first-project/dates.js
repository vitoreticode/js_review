// TIME IS JUST A CONSTRUCT
// In JS always an object

// One central object Date that contains date and time


// Get now
const rightNow = new Date

// specific date and time
// month contains starts with zero
const randomDate = new Date(2015, 3, 12, 6, 24, 58)

// set a specific date - time set to midnight
const win95Lauch = new Date(1995,7,24)

console.log(randomDate)
console.log(win95Lauch)

// Setting values

const now = new Date()
now.setMonth(3)
now.setDate(4)
now.setHours(4) // 24 hours clock
now.setMinutes(24)

console.log(now)