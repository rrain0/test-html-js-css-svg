

function jsBasic(){
	

	console.log("-------JS BASIC var function let const, global variables");


	// This is an in-line comment.
	/* This is a
	multi-line comment */



	//вывод в консоль браузера
	//консоль находится в инструментах разработки
	console.log(2 + 3);


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

	{
		//тип undefined
		var undef1;
		console.log(undef1); // -> undefined
		console.log(undef2); // -> undefined
		var undef2 = undefined;
	}

	console.log("-------------------------");















	// global function var let const

	// global - обращение к глобальным переменным
	// Создавать глобальные переменные - антипаттерн.
	// Можно создать <globalVariableName> = <value>, если имя не перекрывается локально
	// Можно удалить через delete <globalVariableName>
	// Если её нет - будет исключение, но надо смотреть, чтобы её имя не перекрыли другие определения function var let const,
	// даже если мы ещё не дошли до инициализации function var let const, 
	// они уже зарезервируют имя (получим либо ошибку (let const), либо undefined (для function var в подблоках кода))

	// function & var - функциональна область видимости

	// function - инициализируется сразу в своей функциональной области (можно вызывать до объявления)
	// функциональная область - весь код в блоке текущего объявления 'function'
	//							Код в функциональных подблоках - недостижим для вызова (function is not defined)
	//							Код в обычных подблоках - объявленные там var & function будут undefined, пока код их объявления не исполнится

	// var - функциональная область видимости (внутри любого места функции)
	// var инициализируютя сразу (как минимум undefined)
	// видимость вверх ограничена ближайшей функцией (объявлением function), вниз - не ограничена

	// let & const - блочная область видимости

	// let - блочная область видимости (для блока и подблоков (и подфункций))
	// let инициализируютя сразу (как минимум undefined)
	// видимость вверх ограничена ближайшим блоком, вниз - не ограничена

	// const - необходимо присвоисть значение явно и сразу, значение нельзя менять
	// видимость как у let: вверх ограничена ближайшим блоком, вниз - не ограничена

	fun1();
	function fun1() {
		console.log(var1); // -> var 1
		// ReferenceError: can't access lexical declaration 'let1' before initialization
		try { console.log(let1); } catch(e){ console.warn(e) }
		console.log(var2); // -> undefined
		console.log(var3); // -> undefined
		var var1 = "var 1";
		let let1 = "let 1";

		// ReferenceError: globalVar is not defined
		try { console.log('globalVar',globalVar) } catch(e){ console.warn(e) }
		globalVar = 'string value'
		console.log('globalVar',globalVar)
		delete globalVar

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
		try { console.log(let2) } catch(e){ console.warn(e) }

		// -> будет пойман ReferenceError: var4 is not defined
		try {console.log(var4) } catch(e){ console.warn(e) }

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
		try {console.log(var2) } catch(e){ console.warn(e) }
	}
	fun2();

	console.log("-------------------------");




	function fun3() {
		const const1 = "const 1"
		if (true) {

			// TypeError: Assignment to constant variable.
			try { const1 += "123" } catch(e) { console.warn(e) }

			console.log(const1) // -> const 1

			//ReferenceError: Cannot access 'const3' before initialization
			try {console.log(const3) } catch(e) { console.warn(e) }

			const const3 = "const 3"

			console.log(const3); // -> const 3
		}

		//ReferenceError: const3 is not defined
		try {console.log(const3) } catch(e) { console.warn(e) }
	}
	fun3()

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
		globalTrue = true // antipattern
		globalFalse = false // antipattern
	}
	funFact();
	console.log(globalTrue);
	console.log(globalFalse);


	/*
	Это показывает, что подразумеваемые глобальные переменные являются технически не реальными переменными, 
	но они являются свойствами глобального объекта. 
	Свойства могут быть удалены с помощью оператора delete, тогда как переменные var не могут
	*/
	delete globalTrue // Удаление подразумеваемой глобальной переменной
	//ReferenceError: globalTrue is not defined
	try { console.log(globalTrue) } catch(e) { console.warn(e) }









	console.log("-------------------------");





	console.log("--------------------JS BASIC END");

}
