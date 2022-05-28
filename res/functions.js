

console.log("-------------------------FUNCTIONS");

// TODO check visibility of function

// объявление function - функциональная область видимости - видно в текущей функции

console.log("-------------------------");
console.log("fun 1")
//fun122(); // fun122 is not defined
//fun120(); // fun120 is not defined
fun118();

funnn1();

function funnn1() {

	console.log("fun 2")
	//fun122(); // fun122 is not a function
	//fun120(); // fun120 is not defined
	fun118();

	if (true) {
		console.log("fun 3")
		fun122();
		//fun120(); // fun120 is not defined
		fun118();

		function fun122() {
			console.log("=> fun122")
		}

		console.log("fun 4")
		fun122();
		//fun120(); // fun120 is not defined
		fun118();
	} else {
		console.log("fun 5")
		fun122();
		fun120();
		fun118();

		function fun120() {
			console.log("=> fun120")
		}
	
		console.log("fun 6")
		fun122();
		fun120();
		fun118();

	}


	{
		console.log("fun 7")
		fun122();
		fun120();
		fun118();
		function fun118() {
			console.log("=> fun118")
		}
		console.log("fun 8")
		fun122();
		fun120();
		fun118();
	}
	
	console.log("fun 9")
	fun122();
	//fun120(); // fun120 is not defined
	fun118();
}

console.log("fun 10")
//fun122(); // fun122 is not defined
//fun120(); // fun120 is not defined
console.log("-------------------------");






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

console.log("-------------------------");



// стрелочные функции
const arrowFunc1 = () => {
	console.log(arrowFunc);
}
const arrowFunc2 = () => "returning string"; //короткая запись
const arrowFunc3 = () => ({description: "returning object"}); //короткая запись - создание и возврат объекта
// вызывать обязательно ПОСЛЕ объявления в коде, 
// т.к. они считаются за переменные и должны быть проинициализированы
arrowFunc2(); 

const oldStyleFunc = function() {return "oldStyleFunc";} // нельзя сокращать (писать без {} и return'а)
console.log(oldStyleFunc());
console.log(oldStyleFunc); // просто выведет код функции

console.log("-------------------------");







{
	// this test
	// this - обращение к объекту, в котором находится функция
	// в зависимости от объекта, в который мы помещаем функцию, this меняется или undefined

	firstObj = {
		id: 1,
		getId() {return this.id}
	}
	secondObj = {
		id:2
	}

	getId = firstObj.getId
	secondObj.getId = getId

	// принудительное привязывание объекта к this
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






	console.log("-------------------------");
}

console.log("-------------------------FUNCTIONS END");
