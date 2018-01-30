let p = new Promise((resolve, reject) => {
    resolve('Resolved promise data');
})
p.then(response => console.log(response));

let p2 = new Promise((resolve, reject) => {
    reject('Rejected promise data');
})
p2.then(response => console.log(response))
.catch(error => console.log(error));