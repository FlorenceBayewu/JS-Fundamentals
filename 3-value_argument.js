//script that prints the first argument passed to it
let args = process.argv[2];
//2 was used because it excludes node and script path which are 0 and 1 respectively.
// Check for first argument
if (args[0] === undefined) {
    console.log("No argument");
} else {
    console.log(args[0]);
}