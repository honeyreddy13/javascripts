let key = 1;
switch (key) {
    case 1:
        console.log("1");
        break;
    default:
        break;
}

let month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("No month exists with the number");
        break;
}

const useremail = "";
if (useremail) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}

// Falsy values: false, 0, -0, BigInt(0), "", null, undefined, NaN
// Truthy values: "0", "false", " ", [], {}, function(){}

if (useremail.length === 0) {
    console.log("Array is empty");
}

const emptyobj = {};
if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) handles null and undefined
let val1;
val1 = 5 ?? 10;
console.log(val1); // Output: 5

val1 = null ?? 10;
console.log(val1); // Output: 10

val1 = undefined ?? 15;
console.log(val1); // Output: 15

// Removed incorrect syntax (>> ??)

// Ternary operator usage
const iceteaprice = 100;
iceteaprice >= 80 ? console.log("less than 80") : console.log("more than 80");
