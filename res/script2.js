
console.log("-------------------------SCRIPT 2");

let bulletedList = document.getElementById("bulleted-list");
console.log(bulletedList);

// переменные были объявлены в первом файле скрипта
console.log(string1); // -> this is string
console.log(string2); // -> this is string 2
console.log(string3); // -> this is string 3
console.log(string4); // -> this is string 4
delete string4 // delete global variable

console.log("-------------------------SCRIPT 2 END");