let n = -3;
let m = -10;
let count = 42;
arr = [];
function randomNum(){
        let random = Math.round(Math.random() * Math.abs(n - m));
        let min = Math.min(n,m);
    return  min +  random;
}
for(i = 0; i < count; ++i){
    let x = randomNum()
    arr.push(x)
}

console.log(arr);
console.log(arr.length)