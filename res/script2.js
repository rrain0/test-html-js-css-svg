
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



console.log('----------SCOPE TEST:')

function fsjdfohew(){
  console.log('a', a)
  //console.log('b', b) // error
  //console.log('c', c) // error
  //console.log('d', d) // error
  console.log('e', e)
  
  var a = 1
  const nested = () => {
    var b = 1
  }
  function nestedF(){
    var c = 1
  }
  const sdjf = function(){
    var d = 1
  }
  if (false) {
    var e = 1
  }
}
fsjdfohew()

console.log('----------SCOPE TEST END')