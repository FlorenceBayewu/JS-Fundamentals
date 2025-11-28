//script that prints the first argument passed to it
let args = process.argv[2];
// Check if the first argument exists
if (args[0] === undefined) {
    console.log("No argument");
} else {
    console.log(args[0]);
}