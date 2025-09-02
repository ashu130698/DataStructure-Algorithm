function printAllSubarrays(arr: number[]): void {
    //starting from i and end from i
    //take two loops for start to end
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let s = "";
            for (let k = i; k <= j; k++){
                s += arr[i] + " ";
            }
            console.log(s);
            
        }
    }
}

printAllSubarrays([5,6,3,4,8,6,9])