let args = process.argv.slice(2);
let num1 = parseInt(args[0], 10);
 num2 = parseInt(args[1], 10);
function add(a, b) {
    return a + b;
}
console.log(add(num1, num2));