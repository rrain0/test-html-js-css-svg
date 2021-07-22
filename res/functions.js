
console.log("-----------------------------------------------FUNCTIONS");


//функции
function func(argument) { //ПЕРВОЕ ОБЪЯВЛЕНИЕ ФУНКЦИИ
	console.log(argument+"klhglkhasldfg");
}

//БУДЕТ ВЫЗЫВАТЬСЯ ПЕРЕОПРЕДЕЛЁННАЯ ФУНКЦИЯ
func(); //argument -> undefined
func("string arg"); //аргумент - строка
func(57+3); //аргумент - число
func(0.5, "lkadjflkl"); //лишние аргументы игнорятся
function func(argument) { //ФУНКЦИЯ БЫЛА ПЕРЕОПРЕДЕЛЕНА
	console.log(argument);
}

console.log("-----------------------------------------------------");



//стрелочные функции
const arrowFunc = () => "returning string"; //короткая запись
const arrowFunc2 = () => {
	console.log(arrowFunc);
}
const arrowFunc3 = () => ({description: "returning object"}); //короткая запись - создание и возврат объекта
//вызывать обязательно после объявления в коде, 
//т.к. они считаются за переменные и должны быть проинициализированы
arrowFunc2(); 

const oldStyleFunc = function() {return "oldStyleFunc";}//нельзя сокращать (писать без {} и return'а)
console.log(oldStyleFunc());
console.log(oldStyleFunc);//просто выведет код функции

console.log("-----------------------------------------------------");








firstObj = {
	id: 1,
	getId() {return this.id}
}


secondObj = {
	id:2
}

getId = firstObj.getId
secondObj.getId = getId

getIdFixedThis = firstObj.getId.bind(firstObj)
firstObj.getIdFixedThis = getIdFixedThis
secondObj.getIdFixedThis = getIdFixedThis


//NOT FIXED THIS
console.log(firstObj.getId()) //return id of firstObj
console.log(getId()) //"not in object" - return undef
console.log(secondObj.getId()) //return id of secondObj

//FIXED THIS - always return id of firstObj
console.log(firstObj.getIdFixedThis())
console.log(getIdFixedThis())
console.log(secondObj.getIdFixedThis())

//тело функции
console.log(getIdFixedThis) // -> ƒ getId() {return this.id}






console.log("------------------------------------------------------------");