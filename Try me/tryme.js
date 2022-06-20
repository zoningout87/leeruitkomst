
var count = 1;
while (count <= 100) {

    var output = "";
    if (count % 3 === 0 && count % 5 === 0) {
        output = "FizzBuzz";

    } else if (count % 3 === 0) {
        output = "Fizz";

    }
    else if (count % 5 === 0 ) {
        output = "Buzz";

    }
    else {
        output = count;
    }

    console.log(output);

    count++;
}

