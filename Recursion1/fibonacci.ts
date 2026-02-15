function fibonacci(n: number): number {  //we take parameter n because if we look at bottom it ask what is the value of f(6) and also it returns a number
    //base case
    if (n == 0) return 0;  //if we not put this condition then it will not stop and still go on
    if (n == 1) return 1;
    //body
    let fnm1 = fibonacci(n - 1);  // In Recursion it will distribute its task, like if we want to find f(6) then first we have to find f(6-1=5) and f(6-2=4)
    let fnm2 = fibonacci(n - 2);
    return fnm1 + fnm2;
}

console.log(fibonacci(8));

//fibonacci(n:number)=fibonacci(6)
// : number = return type