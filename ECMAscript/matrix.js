Array.matrix = function(numrows, numcols, initial) {
    let arr = [];
    for (let i = 0; i < numrows; i++) {
        let columns = [];
        for (let j = 0; j < numcols; j++) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
};

let nums = Array.matrix(5,5,0);
console.log(nums[1][1]);