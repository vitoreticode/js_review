// Exceptions
    // Interruptions in the intended execution of code

// Error 
    // Uninted interruption in execution code

// Throwing an Exception
    // Sending a message that something gone wrong in the intended execution of code

// throw 'myException'
// throw true

// Try
    // Block of code that may throw an Exception
// Catch
    // Block of code that will run an Exception
// Finally
    // Optional enclosed code that will run after the try or catch block,
    // Runs every time, even if a exception is not thrown

function divideTwoNumbers(a, b) {
    return a / b
}

try {
    throw "An exception that is thrown every time"
    x = divideTwoNumbers(1, 0)
    console.log(x)
} catch (ex) {
    console.log("Got an error: " + ex)
} finally {
    console.log("Code that always run")
}

