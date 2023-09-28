let sum = 0;
let arr = [1, 2, 3, 5, 7, 11, 13];
for (let i=0; i < arr.length; i++) { //typical for loop
      sum += arr[i];
}

for (let item of arr) { sum += item } //loop over collection

var car = { make: "Ford", model: "Focus", year: 2017};
for ( var p in car ) { //enumerable properties loop
    if ( isNaN(car[p]) ) car[p] = car[p].toUpperCase();
}
