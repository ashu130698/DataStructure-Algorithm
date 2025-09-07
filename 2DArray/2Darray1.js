function zigzagTraverse(arr) {
    //first step is always starts with i coz it goes to i to j first
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {       //even
            for (var j = 0; j < arr[i].length - 1; j++)   // if no. is even like 0,2,4.... so the loop traverse from i[0,2,4...] to arr[i].length-1
                console.log(arr[i][j]);
        }
        else {          //odd
            for (var j = arr[i].length - 1; j >= 0; j--)   //if no. is odd then it goes arr[i].length-1 to i[1,3,5....]
                console.log(arr[i][j]);
        }
    }
}
var arr = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 1]
];
