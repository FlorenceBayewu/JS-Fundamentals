 //script that prints x times “C is fun”
const arg = process.argv[2];

// Convert the first argument to an integer
const x = parseInt(arg[0],10);

// Check if conversion was successful
if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    let output = "";
    for (let i = 0; i < x; i++) {
     output+= "C is fun\n";   
    }
    console.log(output);
}