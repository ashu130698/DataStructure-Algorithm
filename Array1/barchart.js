function getMaxElement(arr) {
    var maxele = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxele) {
            maxele = arr[i];
        }
    }
    return maxele;
}
function barChart(arr) {
    var height = getMaxElement(arr);
    var width = arr.length;
    for (var curfloor = height; curfloor >= 1; curfloor--) {
        var s = "";
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= curfloor)
                s += "*";
            else
                s += " ";
        }
        console.log(s);
    }
}
barChart([7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7]);
