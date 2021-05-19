var testArr = [6, 3, 5, 1, 2, 4];
var total;
for (var i = 0; i < testArr.length; i++) {
    total = testArr[i] + testArr[i - 1];
    console.log(testArr[i]);
    console.log(total);
}

//* Couldn't quite figure the one out above.  Never could quite get the right output.  Will cover in code review and update later.  The one below is showing correct output.


var testArr = [6, 3, 5, 1, 2, 4];
for (var i = 0; i < testArr.length; i++) {
    testArr[i] = testArr[i] * i;
}
console.log(testArr);

