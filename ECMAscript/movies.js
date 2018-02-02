let movies = read(films.txt).split("\n");

function createArr(file) {
    let arr = read(file).split("\n");
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].trim();
    }
    return arr;
}

console.log(createArr(movies));