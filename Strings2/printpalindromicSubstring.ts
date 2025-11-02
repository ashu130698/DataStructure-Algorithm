function isPalindrome(s: string): boolean {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (s[l] != s[r]) return false;
        l++;
        r--;
    }
    return true;
}

function printPalindromicSubstring(s: string): void {
    for (let i = 0; i < s.length; i++){
        for (let j = i; j < s.length; j++){
            let substr = s.substring(i, j + 1);
            if (isPalindrome(substr)) {
                console.log(substr);   
            }
        }
    }
}

let s = "bcbdqrqp";
printPalindromicSubstring(s);