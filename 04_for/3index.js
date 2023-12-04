let arr = [];
    for(i=0; i < 10; ++i){
        arr.push(i+1);
    }
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

shuffle(arr)
console.log(arr);


let findNumber = 3;
// По условию задачи цикл
// for(i = 0; i < arr.length; ++i){
//     if(arr[i] === findNumber){
//         console.log(arr[i] + " Элемент найдент. Индекс: " + i);
//         break
//     } else if (arr[i] !== findNumber){
//         console.log("Пока не найден в массиве");
//     }
//     // Плохо работает
//     // arr[i] === findNumber ?  console.log(arr[i] + " Элемент найдент. Индекс: " + i) : console.log("Пока не найден в массиве");
// }
//Даже через фильтр выводит сообщение в консоль "Пока не найден в массиве"
// arr.filter((el, idx)=> {
//     findNumber === el ? console.log(" Элемент найдент. Индекс: " + idx) : console.log("Пока не найден в массиве")
// }
// )

// Полностью реализовать заданное в т.з смог только так
// "Если такой элемент не будет найден, то выведите соответствующее сообщение на экран."

function found(arr){
    let found = false
    arr.filter((el, idx)=> {
        if(el === findNumber){
            console.log(" Элемент найдент. Индекс: " + idx)
            found = true
        }
    })
    if(found === false){
        console.log("Элемент не найден!");
    }
}
found(arr)