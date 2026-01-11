function func(curr, psf, n) {
    if (curr == n) {
        console.log(psf);
        return;
    }
    if (curr > n)
        return;
    //1jump
    func(curr + 1, psf + 1, n);
    //2jump
    func(curr + 2, psf + 2, n);
    //3jump
    func(curr + 3, psf + 3, n);
}
console.log(func(0, "", 4));
