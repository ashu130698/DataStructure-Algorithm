function pattern1(n) {
    for (var i = 1; i <= n; i++) {
        //run n times
        //i= 1,2,3,....n
        var currentRow = "";
        //the below loop will run i times and will add i stars
        for (var j = 1; j <= i; j++) {
            currentRow += "*"; //every time will add 1 star
            //this loop will run i times, total i stars will be added
        }
        console.log(currentRow);
    }
}
pattern1(5);
