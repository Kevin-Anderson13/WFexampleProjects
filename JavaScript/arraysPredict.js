var arr = [8, 6, 7, 5, 3, 0, 9]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 8,6,7,5,3,0,9   
//*The for loop stops when i < 7. which is arr.length.  But it needed to stop anyway. because when i reaches 7 ther is no arr[i] anyway. because arr[6] is the last spot.



var arr = [7, 3, 8, 4, 2, 0, 1];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
    else {
        console.log("That is odd!");
    }
}

// That is odd!, That is odd!, 8, 4, 2, 0, That is odd!    
//*This is just a way to show which numbers are even and explain which one's are odd.



var arr = [1, 3, 8, -5, 0, -2, 4, -1];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if (arr[i] == 0) {
        arr[i] = "Zero";
    }
    else {
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

// [-1, -3, -8, 5, "Zero", 2, -4, 1]
// [-5, -2, -1]
//* This one prints on two different lines because the console logs are outside of the loop and the arrays are filled as you execute each line of the if, else if, else statement within the for loop.