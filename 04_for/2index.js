let arr = [];
    for(i=0; i < 10; ++i){
        arr.push(i+1);
    }
// Есть недостаток, генератор рандомных чисел межет сгенерировать одинаковое число, тогда в массиве будет undefined
// for (let i = 0; i < arr.length; i++) {
//     const r = Math.round(Math.random() * arr.length);
//     let temp = arr[i];
//     arr[i] = arr[r];
//     arr[r] = temp;
//   }
//   console.log(arr);

// Есть недостаток, генератор рандомных чисел межет сгенерировать одинаковое число, тогда в массиве будет undefined
// for (let i = 0; i < arr.length; i++) {
//     const r = Math.round(Math.random() * arr.length);
//     [arr[i], arr[r]] = [arr[r], arr[i]];
//   }

// самый надежный способ

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

shuffle(arr)
console.log(arr);