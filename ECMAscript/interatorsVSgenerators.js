//interator
const arrayIterator = (array) => {
    let index = 0;
    
    return {
        next: () => {
            if (index < array.length) {
                let next = array[index];
                index += 1;
                return next;
            }
        }
    }
}

let it = arrayIterator([1, 2, 3]);
console.log(it.next()); //1
console.log(it.next()); //2
console.log(it.next()); //3
console.log(it.next()); //undefined

//same with generator
function* arrayIterator2 () {
    //for (let arg of arguments) {
        //yield arg
    //}
    yield * arguments;
}

let it2 = arrayIterator2(1, 2, 3);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);