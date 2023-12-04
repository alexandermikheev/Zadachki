let a = 13.890123
let b = 2.891564
let n = 2

function getFraction(a,n) {
    let z = ((a - Math.floor(a)) * Math.pow(10, n));
          return Math.trunc(z)
}

firstFraction = getFraction(a,n)
secondFraction = getFraction(b,n)

let comparison = firstFraction === secondFraction
if(comparison === false){
    console.log('Исходные числа не равны ' +  comparison, firstFraction,secondFraction);
}
else(console.log('Исходные числа равны ' +  comparison, firstFraction,secondFraction)
)
