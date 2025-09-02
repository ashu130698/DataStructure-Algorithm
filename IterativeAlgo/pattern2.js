function pattern2(n) {
    for (var i = n; i >= 1; i--) {
        var stars = i;
        var spaces = n - stars;
        var currentRow = "";
        for (var j = 1; j <= spaces; j++) {
            currentRow += " ";
        }
        for (var j = 1; j <= stars; j++) {
            currentRow += "*";
        }
        console.log(currentRow);
    }
}
pattern2(9);
