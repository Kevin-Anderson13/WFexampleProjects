// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.(code below)


var newArr;
function get_array(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}
newArr = get_array(255);
console.log(newArr);



// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise. (code below)

function sum_even_numbers(number) {
    var sum = 0;
    for (var i = 0; i <= number; i++) {
        if ((i % 2) === 0) {
            sum = i + sum;
        }
    }
    return sum;
}
sum = sum_even_numbers(1000);
console.log(sum);


// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.(e.g. 1 + 3 + 5 +...+4997 + 4999).

function sum_odd_numbers(number) {
    var sum = 0;
    for (var i = 0; i <= number; i++) {
        if ((i % 2) === 1) {
            sum = i + sum;
        }
    }
    return sum;
}
sum = sum_odd_numbers(5000);
console.log(sum);


// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1, 2, 5] returns 8.[-5, 2, 5, 12] returns 14).

var sumArr = 0;
var arr;
function sum_of_array(arr) {

    for (var i = 0; i < arr.length; i++) {
        sumArr = arr[i] + sumArr;
    }
    return sumArr;
}

sumArr = sum_of_array([1, 2, 5]);

console.log(sumArr);


//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

var maxNum;
function find_max_num(arr) {
    var max = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }

    }
    return max;
}

maxNum = find_max_num([-3, 3, 5, 7]);
console.log(maxNum);


//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

var average;
var sum = 0;
function find_average(arr) {
    for (var i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    average = sum / arr.length;
    return average;
}

var arrAverage = find_average([1, 3, 5, 7, 20]);
console.log(arrAverage);


//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

var oddArray
function print_odd_numbers(num) {
    var arr = [];
    for (var i = 0; i <= num; i++) {
        if ((i % 2) == 1) {
            arr.push(i);
        }
    }
    return arr;
}

oddArray = print_odd_numbers(50);
console.log(oddArray);


//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

var overY;
function numbers_over_y(arr, Y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}
overY = numbers_over_y([1, 3, 5, 7], 3);
console.log(overY);


//Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

var squaredArr;
function square_all_nums(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = (arr[i] ** 2);
    }
    return newArr;
}

squaredArr = square_all_nums([1, 5, 10, -2]);
console.log(squaredArr);


//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

var noNeg;
function no_negative_array(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

noNeg = no_negative_array([1, 5, 10, -2]);
console.log(noNeg);


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

var maxminavgArr;
function max_min_avg(arr) {
    var newArr;
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = arr[i] + sum;
    }
    var avg = sum / arr.length;
    newArr = [max, min, avg];
    return newArr;
}

maxminavgArr = max_min_avg([1, 5, 10, -2]);
console.log(maxminavgArr);



// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

var arrSwap;
function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}

arrSwap = swap([1, 5, 10, -2]);
console.log(arrSwap);


//Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

var noNeg;
function no_negative_array(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}

noNeg = no_negative_array([-1, -3, 2]);
console.log(noNeg);