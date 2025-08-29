function pattern1(n:number) {
    for (let i = 1; i <= n; i++){
        //run n times
        //i= 1,2,3,....n
        let currentRow = "";
        //the below loop will run i times and will add i stars
        for (let j = 1; j <= i; j++){
            currentRow += "*";  //every time will add 1 star
            //this loop will run i times, total i stars will be added
        }
        console.log(currentRow);
        
    }
}
pattern1(5)