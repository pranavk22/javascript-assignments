var num = prompt("Enter the number");
var result = parity(num);
function parity(num) {
    // console.log(num);

    if (num % 2 == 0) {
        console.log("even");
        return "even";
    }
    else {
        console.log("odd");
        return "odd";
    }
}
document.getElementById("result").innerHTML = "The number " +num +" is " +result;