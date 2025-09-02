function getMaxElement(arr: number[]) {
    let maxele = - Infinity;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxele) {
            maxele = arr[i];
        }
    }
    return maxele;
}

function barChart(arr: number[]) {
    let height = getMaxElement(arr);
    let width = arr.length;

    for (let curfloor = height; curfloor >= 1; curfloor--) {
        let s = "";
        for (let i = 0; i < arr.length; i++){
            if (arr[i] >= curfloor) s += "*"
            else s+=" "
        }
        console.log(s);
    }
}

barChart([7,6,5,4,3,2,1,2,3,4,5,6,7])