let animals = ["lions", "tigers", "bears"];
let code = new Set([4782, 8675309, 007]);
let data = new Map ();

data.set = ("musician", "James Brown");
data.set = ("song", "Say it Loud(I'm Black and I'm Proud)");

for (let entry of animals.entries()) {
	console.log(entry);
}

for (let entry of code.entries()) {
	console.log(entry);
}

for (let entry of data.entries()) {
	console.log(entry);
}

for (let value of animals.values()) {
	console.log(value);
}

for (let value of code.values()) {
	console.log(value);
}

for (let value of data.values()) {
	console.log(value);
}

for (let key of animals.keys()) {
	console.log(key);
}

for (let key of code.keys()) {
	console.log(key);
}

for (let key of data.keys()) {
	console.log(key);
}