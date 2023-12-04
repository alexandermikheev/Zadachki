let n = 1
let m = 2
function random(n,m){
    let range = Math.abs(n - m);
    let namberInRange = Math.round(Math.random() * range);
    let min = Math.min(n, m);
    return randomNumber = min + namberInRange;
}
console.log(random(n,m))