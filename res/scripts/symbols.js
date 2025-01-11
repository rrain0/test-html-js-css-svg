
function symbolsTest(){
	// Symbol - используется как уникальный ключ доступа в объекте помимо строк
	// Каждый новый Symbol всегда УНИКАЛЕН
	//
	// Достать значение по Symbol можно только с помощью самого объекта Symbol - 
	// работает принцип «сокрытия символьных свойств»,
	// НО существуют методы, которые могут получить доступ к символам просто так:
	// Object.getOwnPropertySymbols(obj); Reflect.ownKeys(obj);

	// создание символа
	// параметр конструктора - метка - используется только для дебага и ни на что не влияет
	let sym1 = Symbol("symbol tag 1")
	let sym2 = Symbol("symbol tag 2")

	console.log(sym1) // => Symbol(symbol tag 1)
	console.log(sym1.toString()) // => Symbol(symbol tag 1)
	console.log(sym1.description) // => symbol tag 1
	//alert(sym1) // ошибка: Symbol не конвертится в строку автоматически (т.к. это бессмысленно)

	let obj = {
		id: 78,
		[sym1]: 90
	}
	obj[sym2] = "by symbol2"

	// Symbol не итерируется в for..in
	console.log("for..in obj:")
	for (let key in obj){
		console.log(`${key}: ${obj[key]}`)
	}
	console.log("end of for..in")
	console.log(`obj[sym1]: ${obj[sym1]}`)
	console.log(`obj[sym2]: ${obj[sym2]}`)

	// вывести массив ключей объекта (Symbol и туда не попадает)
	console.log(Object.keys(obj))


	// Глобальные символы - доступны отовсюду по имени - хранятся в специальном реестре
	// Здесь имя - метка, и оно уникально

	// Вернуть (или создать и вернуть) символ по имени
	let globalSym1 = Symbol.for("id")
	let globalSym2 = Symbol.for(4) // цифра преобразуется в строку
	let globalSym3 = Symbol.for("4")

	console.log(globalSym1) // => Symbol(id)
	console.log(globalSym2) // => Symbol(4)
	console.log(globalSym3) // => Symbol(4)
	console.log(globalSym2 == globalSym3) // => true

	// Вернуть ключ для объекта-символа из реестра (иначе undef)
	console.log(`key for globalSym1: ${Symbol.keyFor(globalSym1)}`) // => id

	// Symbol в массиве - всё равно скрытое свойство
	let arr = []
	arr[sym1] = 89898
	console.log(arr[sym1]) // => 89898
	console.log(arr.length) // => 0 - нулевая длина
	
	// Symbol to string
	//console.log(`${Symbol('a')}`) // Error
	console.log(`${String(Symbol('a'))}`) // Ok
	console.log(`${Symbol('a').toString()}`) // Ok
}