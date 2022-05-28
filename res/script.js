



console.log("-------------------------SCRIPT");


// This is an in-line comment.
/* This is a
multi-line comment */



//вывод в консоль браузера
//консоль находится в инструментах разработки
console.log(2+3);

console.log("-------------------------");



//СНАЧАЛА ИНИЦИАЛИЗИРУЮТСЯ ВСЕ ОБЪЯВЛЕНИЯ ФУНКЦИЙ И ПЕРЕМЕННЫХ
//а потом выполняется
//можно обращаться к перемнным и вызывать функции до их определения в коде
//присвоение выполняется по порядку написания (в т.ч. и при инициализации с присвоением)

//Стрелочные функции вызывать обязательно после объявления в коде, 
//т.к. они считаются за переменные и должны быть проинициализированы




//Переменные, созданные в корне скрипта являются глобальными
//Variable names can be made up of 
//numbers, letters, and $ or _, 
//but may not contain spaces or start with a number.

//типы данных
//undefined, null, boolean, string, symbol, bigint, number, object

//тип undefined
var undef1;
console.log(undef1); // -> undefined
console.log(undef2); // -> undefined
var undef2 = undefined;

var string1 = "this is string";
let string2 = "this is string 2";
const string3 = "this is string 3";
string4 = "this is string 4";

console.log("-------------------------");















// var let const

// var - функциональная область видимости (внутри любого места функции)
// var инициализируютя сразу (как минимум undefined)
// видимость вверх ограничена ближайшей функцией, вниз - не ограничена

// let - блочная область видимости (для блока и подблоков (и подфункций))
// let инициализируютя сразу (как минимум undefined)
// видимость вверх ограничена ближайшим блоком, вниз - не ограничена

// const - необходимо присвоисть значение явно и сразу, значение нельзя менять
// видимость как у let: вверх ограничена ближайшим блоком, вниз - не ограничена
fun1();
function fun1() {
	var var1 = "var 1";
	let let1 = "let 1";
	if (true) {
		var var2 = "var 2";
		let let2 = "var 2";
		console.log(var1);
		console.log(let1);
		console.log(var2);
		console.log(let2);
	} else {
		var var3 = "var 3";
	}
	console.log(var1); // -> var 1
	console.log(let1); // -> let 1
	console.log(var2); //всё ок // -> var 2
	console.log(var3); // -> undefined

	// -> будет пойман ReferenceError: let2 is not defined
	try {console.log(let2);} catch(re){console.log(re);}

	// -> будет пойман ReferenceError: var4 is not defined
	try {console.log(var4);} catch(re){console.log(re);}

	let let3;
	console.log(let3);
}

console.log("-------------------------");



function fun2() {
	var var1 = "adfl";
	let let1 = "let 1";
	let let2;
	function nestedFun() {
		var1 += "123";
		console.log(var1); // -> adfl123
		console.log(let1); // -> let 1
		console.log(let2); // -> undefined
		var var2 = "var 2";
	}
	nestedFun();
	console.log(var1); // -> adfl123

	// -> будет пойман ReferenceError: var2 is not defined
	try {console.log(var2);} catch(re){console.log(re);}
}
fun2();

console.log("-------------------------");




function fun3() {
	const const1 = "const 1";
	if (true) {

		//TypeError: Assignment to constant variable.
		try{const1 += "123";} catch(te){console.log(te);}

		console.log(const1); // -> const 1

		//ReferenceError: Cannot access 'const3' before initialization
		try{console.log(const3);} catch(re){console.log(re);}

		const const3 = "const 3";

		console.log(const3); // -> const 3
	}

	//ReferenceError: const3 is not defined
	try{console.log(const3);} catch(re){console.log(re);}
}
fun3();

console.log("-------------------------");


//ТАК НЕ ДЕЛАТЬ:
/*
Чтобы понять что происходит, нам нужно вернуться назад к понятию поднятия. 
Обычно при инициализации переменной в нашем коде интерпретатор ищет 
«поднятые переменные» и затем присваивает или переназначает значение переменной. 
Однако, когда интерпретатор не может найти переменную внутри функции, 
он ищет ее среди переменных родительской функции, 
пока не дойдет до глобальной области видимости.

В нашем случае интерпретатор не найдет 'globalTrue' и 'globalFalse'
даже в глобальной области видимости, поэтому он автоматически туда ее добавит.

Это невероятно опасный процесс, которого лучше не допускать. 
Поэтому имейте в виду, что объявлять переменные без ключевых слов var, let и const 
нельзя.
*/
function funFact() {
	//"use strict"; //это позволит избежать некоторых антипаттернов, таких как этот
	globalTrue = true;// antipattern
	globalFalse = false;// antipattern
}
funFact();
console.log(globalTrue);
console.log(globalFalse);


/*
Это показывает, что подразумеваемые глобальные переменные являются технически не реальными переменными, 
но они являются свойствами глобального объекта. 
Свойства могут быть удалены с помощью оператора delete, тогда как переменные var не могут
*/
delete globalTrue; //удаление подразумеваемой глобальной переменной
//ReferenceError: globalTrue is not defined
try{console.log(globalTrue);} catch(re){console.log(re);}









console.log("-------------------------");





console.log("-------------------------SCRIPT END");

