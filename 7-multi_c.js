const inputArg = process.argv[2];

// Convert the argument to an integer
const numOccurrences = parseInt(inputArg);

// Check if the argument is a valid number
if (isNaN(count)) {
    console.log("Missing number of occurrences");
} else {
//initialise outputt
    let outputString = "";
// Use a loop to add "C is fun" x times
    for (let i = 0; i < numOccurrences; i++) {
        outputString += "C is fun\n";
    }

    // Print all occurrences at once
    console.log(outputString);
}