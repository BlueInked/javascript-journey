function* letterMaker() {
    yield 'a';
    yield 'b';
    yield 'c';
}

let LetterGen = letterMaker();
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);


function* countMaker() {
    let count = 0;
    while (count < 3) {
        yield count += 1;
    }
}

let countGen = countMaker();
console.log(countGen.next().value); //1
console.log(countGen.next().value); //2
console.log(countGen.next().value); //3
console.log(countGen.next().value); //undefined