//script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:
const arg = process.argv[2];

// Convert the first argument to an integer
const num = Number(arg);

// Check if conversion was successful
if (Number.isInteger(num)) {
    console.log("My number: " + num);
} else {
    console.log("Not a number");
}