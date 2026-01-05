function factorial(n: number): number {
    if (n == 0) return 1;
    let nm1fact = factorial(n - 1);
    return n * nm1fact;
}

console.log(factorial(5));
