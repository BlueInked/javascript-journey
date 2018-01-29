function* evens() {
    let count = 0;
    while(true) {
        count += 2;
        yield count;
    }
}

let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);


function* evens2() {
    let count = 0;
    while(true) {
        count += 2;
        let reset = yield count;
        if (reset) {
            count = 0;
        }
    }
}

let sequence2 = evens2();
console.log(sequence2.next().value);
console.log(sequence2.next().value);
console.log(sequence2.next().value);
console.log(sequence2.next(true).value);
console.log(sequence2.next().value);
console.log(sequence2.next().value);
