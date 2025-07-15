

function typesTest() {

// todo instanceof
// https://learn.javascript.ru/instanceof
	{

		// Примитивные типы && typeof && instanceof
		// Primitives: number string boolean null undefined bigint symbol
		// Objects: object, function, array

		// number
		let n = 123
		console.log(`typeof ${n}: ` + typeof n) // => number
		n = 12.345
		console.log(`typeof ${n}: ` + typeof n) // => number
		n = Infinity
		console.log(`typeof ${n}: ` + typeof n) // => number
		n = -Infinity
		console.log(`typeof ${n}: ` + typeof n) // => number
		n = NaN
		console.log(`typeof ${n}: ` + typeof n) // => number
		console.log(`${n} instanceof Object: ` + (n instanceof Object)) // => false

		// bigint
		// <число>n - литерал BigInt
		let bigint = 1234567890123456789012345678901234567890n
		console.log(`typeof ${bigint}: ` + typeof bigint) // => bigint
		console.log(`${bigint} instanceof Object: ` + (bigint instanceof Object)) // => false

		// string
		let str = "Привет"
		let str2 = 'Одинарные кавычки тоже подойдут'
		let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`
		console.log(`typeof ${str}: ` + typeof str) // => string
		console.log(`${str} instanceof Object: ` + (str instanceof Object)) // => false

		// boolean
		let t = true
		let f = false
		console.log(`typeof ${t}: ` + typeof t) // => boolean
		console.log(`${t} instanceof Object: ` + (t instanceof Object)) // => false

		// null
		// !!!!!! специальное поведение у typeof => object
		// Это отдельный тип, хоть typeof и пишет что объект
		// Символизирует присутствие пустого значения
		let var1 = null
		console.log(`typeof ${var1}: ` + typeof var1) // => object
		console.log(`${var1} instanceof Object: ` + (var1 instanceof Object)) // => false

		// undefined
		// отсутствие значения - значение по умолчанию для переменных
		let undef = undefined
		console.log(`typeof ${undef}: ` + typeof undef) // => undefined
		console.log(`${undef} instanceof Object: ` + (undef instanceof Object)) // => false

		// symbol
		// задаёт машинно уникальные идентификаторы в объектах
		let sym = Symbol("tag")
		console.log(`typeof ${sym.toString()}: ` + typeof sym) // => symbol
		console.log(`${sym.toString()} instanceof Object: ` + (sym instanceof Object)) // => false



		// object
		// любой непримитив - объект
		let obj = {}
		console.log(`typeof ${obj}: ` + typeof obj) // => 'object'
		console.log(`${obj} instanceof Object: ` + (obj instanceof Object)) // => true

		// класс-обёртка для примитива
		let strObj = new String("strObj") 
		console.log(`typeof ${strObj}: ` + typeof strObj) // => object
		console.log(`${strObj} instanceof Object: ` + (strObj instanceof Object)) // => true

		// массив
		// считается объектом
		let arr = []
		console.log(`typeof ${arr}: ` + typeof arr) // => object
		console.log(`${arr} instanceof Object: ` + (arr instanceof Object)) // => true
		console.log(`${arr} instanceof Array: ` + (arr instanceof Array)) // => true

		// function
		// !!!!!! специальное поведение у typeof => function
		function fun1(){}
		let fun2 = ()=>{}
		console.log(`typeof ${fun1}: ` + typeof fun1) // => function
		console.log(`${fun1} instanceof Object: ` + (fun1 instanceof Object)) // => true
		console.log(`typeof ${fun2}: ` + typeof fun2) // => function
		console.log(`${fun2} instanceof Object: ` + (fun2 instanceof Object)) // => true

	}



}