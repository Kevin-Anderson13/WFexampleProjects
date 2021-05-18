var x = -1;

while (x <= 17) {
    x += 2;
    console.log(x);
}

//I'm sure using % modulus or remainder would have been the better way as it is determining odd numbers.  But I was having a hard time getting that to return what I wanted it to.  So I did an easy while loop to count in increments of 2 from -1 instead since the assignment didn't say how to print all odd numbers from 1 to 20.

var num;
var sum = 0;

for (num = 1; num <= 5; num++) {
    sum = num + sum;
    console.log(num);
    console.log(sum);
}

// Took me a while to understand the question on this one.  But after reading it a few times I understood there needed to be 2 variables.  Fun exercise.