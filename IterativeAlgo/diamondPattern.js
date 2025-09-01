function diamondPattern(n) {
    // First line
    var stars = 1;
    var spaces = Math.floor(n / 2);
    for (var i = 1; i <= n; i++) {
        // in every iteration we will print a line of
        // the diamond pattern
        var s = "";
        for (var j = 1; j <= spaces; j++)
            s += " ";
        for (var j = 1; j <= stars; j++)
            s += "*";
        console.log(s);
        if (i < n / 2) {
            // Increase
            stars += 2;
            spaces -= 1;
        }
        else {
            // Decrease
            stars -= 2;
            spaces += 1;
        }
    }
}
diamondPattern(5)
