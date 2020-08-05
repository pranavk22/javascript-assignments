function calculator() {

    var choice = prompt("Menu \n 1. Add \n 2. Subtract \n 3. Multiply \n 4. Divide \n 5. Exponent \n 6. Mean \n 7. Quit \nEnter your choice : ");

    switch (choice) {
        case "1":
            x = prompt("Enter first no. : ");
            if(isNaN(x))
            {
                alert("Entered value is not a number. Please try again");
                calculator();
                break;
            }
            y = prompt("Enter second no. : ");
            if(isNaN(y))
            {
                alert("Entered value is not a number. Please try again");
                calculator();
                break;
            }
            document.getElementById("result").innerHTML = Number(x) + Number(y);
            break;
        case "2":
            x = prompt("Enter first no. : ");
            if(isNaN(x))
            {
                alert("Entered value is not a number. Please try again");
                calculator();
                break;
            }
            y = prompt("Enter second no. : ");
            if(isNaN(y))
            {
                alert("Entered value is not a number. Please try again");
                calculator();
                break;
            }
            document.getElementById("result").innerHTML = Number(y) - Number(x);
            break;
        case "3":
            x = prompt("Enter first no. : ");
            if(isNaN(x))
            {
                alert("Entered value is not a number. Please try again");
                calculator();
                break;
            }
            y = prompt("Enter second no. : ");
            if(isNaN(y))
            {
                alert("Entered value is not a number. Please try again");
                calculator();
                break;
            }
            document.getElementById("result").innerHTML = Number(x) * Number(y);
            break;
        case "4":
            x = prompt("Enter first no. : ");
            if(isNaN(x))
            {
                alert("Entered value is not a number. Please try again");
                calculator();
                break;
            }
            y = prompt("Enter second no. : ");
            if(isNaN(y))
            {
                alert("Entered value is not a number. Please try again");
                calculator();
                break;
            }
            document.getElementById("result").innerHTML = Number(x) / Number(y);
            break;
        case "5":
            x = prompt("Enter base : ");
            if(isNaN(x))
            {
                alert("Entered value is not a number. Please try again");
                calculator();
                break;
            }
            y = prompt("Enter exponent : ");
            if(isNaN(y))
            {
                alert("Entered value is not a number. Please try again");
                calculator();
                break;
            }
            document.getElementById("result").innerHTML = Math.pow(Number(x), Number(y));
            break;
        case "6":
            var i = 0;
            var sum = 0;
            do {
                var number = prompt("Please Enter a Number");
                if(isNaN(num)&& number!="***")
            {
                alert("Entered value is not a number. Please try again");
                calculator();
                break;
            }
                if (number != "***") {
                    sum += parseInt(number);
                } else {
                    break;
                }
                i++;
            }
            while (i < 100);
            document.getElementById("result").innerHTML = sum / i;
            break;
        case "7":
            break;
        default:
            alert("The entered choice is invalid. Please try again.");

    }
}