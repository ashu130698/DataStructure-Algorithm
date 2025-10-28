function toggleCase(s: string): string {
    let ans = "";

    for (let i = 0; i < s.length; i++){
        let ascii = s.charCodeAt(i);  //converting char to ascii
        if (ascii < 97) {
            ascii += 32;
        } else {
            ascii -= 32;
        }
        ans += String.fromCharCode(ascii);   //convert ascii to char
    }
    return ans;
}

console.log(toggleCase("aBcDeF"));
