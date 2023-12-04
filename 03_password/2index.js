let userName = "александр"
let userSurname = "михеев"
function converterName(userName,userSurname){
    let newUserName = userName[0].toUpperCase() + userName.slice(1).toLowerCase()
    let newUserSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase()

    console.log();
    console.log(userName === newUserName ? "Имя осталось без изменений" : "Имя было преобразовано");
    console.log(newUserSurname);
    console.log(userSurname === newUserSurname ? "Имя осталось без изменений" : "Имя было преобразовано");
}
converterName(userName,userSurname)

// Так чисто ради интереса сделал
// let first = userName.substring(0, 1).toUpperCase() + userName.substring(1).toLowerCase();
// let last = userSurname.substring(0, 1).toUpperCase() + userSurname.substring(1).toLowerCase();
// console.log(first);
// console.log(userName === first ? "Имя осталось без изменений" : "Имя было преобразовано");
// console.log(last);
// console.log(userSurname === last ? "Имя осталось без изменений" : "Имя было преобразовано");