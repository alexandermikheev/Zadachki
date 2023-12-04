let password = "123456789_";

console.log((password.includes("-") || password.includes("_")) && password.length >= 4 ? "Пароль надёжный" : "Пароль недостаточно надёжный")

// if((password.includes("-") || password.includes("_")) && password.length >= 4){
//     console.log("Пароль надёжный");
// }else{
//     console.log("Пароль недостаточно надёжный");
// }