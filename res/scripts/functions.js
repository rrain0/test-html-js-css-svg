

function functions(){
	


	console.log("-------------------------FUNCTIONS");
	
	{
		// function?.() - check and invoke
		let fun = undefined
		console.log(fun?.(5))
		fun = n=>n
		console.log(fun?.(56))
	}


	{
		// destructuring from object and default object value
		// default object value then filled with missing default values
		function objectArgumentDestructuringTest(
			{ start=0, end=-1, step=1, loop, ...rest } = { start: 10, loop: true, reversed: false }
		){
			return { start, end, step, loop, rest }
		}
		// { start: 10, end: -1, step: 1, loop: true, rest: reversed: false }
		console.log('objectArgumentDestructuringTest()',objectArgumentDestructuringTest())
		// { start: 0, end: -1, step: 1, loop: undefined, rest: {} }
		console.log('objectArgumentDestructuringTest({})',objectArgumentDestructuringTest({}))
		// { start: 5, end: 5, step: 1, loop: undefined, rest: {} }
		console.log(
			'objectArgumentDestructuringTest({ start: 5, end: 5 })',
			objectArgumentDestructuringTest({ start: 5, end: 5 })
		)
		
		// destructuring from array
		// default array value then filled with missing default values
		function arrayDestructuringTest([x = 0, y = -9, z, ...rest] = [10, , true, 'i', '-i']){
			return [x,y,z,rest]
		}
		// [ 10, -9, true, [ "i", "-i" ] ]
		console.log('arrayDestructuringTest()',arrayDestructuringTest())
		// [ 3, -9, undefined, [] ]
		console.log('arrayDestructuringTest([3])',arrayDestructuringTest([3]))
	}

	{
		// this
		// only 'function' declaration has its own this - arrow functions get it from outer scope and stores as usual variable

		// 'function' gets value of this during every call from outer scope
		// arrow function gets value of this only during creation

		console.log("THIS:")

		function f1(a){ return [this,a] }
		const f2 = function(a){ return [this,a] }
		const af = (a)=>[this,a] // arrow function remembered value of this as usual value during creation and it always window

		console.log('call 1: fn():')
		console.log('f1(1)',f1(1)) // [window, 1]
		console.log('f2(1)',f2(1)) // [window, 1]
		console.log('af(1)',af(1)) // [window, 1]

		const obj = {
			f1,
			f2,
			af
		}

		console.log('call 2: obj.fn():')
		console.log('obj.f1(1)',obj.f1(1)) // [obj, 1]
		console.log('obj.f2(1)',obj.f2(1)) // [obj, 1]
		console.log('obj.af(1)',obj.af(1)) // [window, 1]

		console.log('call 3: fn():')
		console.log('f1(1)',f1(1)) // [window, 1]
		console.log('f2(1)',f2(1)) // [window, 1]
		console.log('af(1)',af(1)) // [window, 1]

		const f1Binded = f1.bind('bind')
		const f2Binded = f2.bind('bind')
		const afBinded = af.bind('bind') // creates new function object but not binds
		const afBinded2 = afBinded.bind('bind') // creates new function object but not binds, it is still ARROW function

		console.log('call 4: fnBinded():')
		console.log('f1Binded(1)',f1Binded(1)) // [String { "bind" }, 1]
		console.log('f2Binded(1)',f2Binded(1)) // [String { "bind" }, 1]
		console.log('afBinded(1)',afBinded(1)) // [window, 1]
		console.log('afBinded===af',afBinded===af) // false
		console.log('afBinded2(1)',afBinded2(1)) // [window, 1]

		console.log('call 5: fn():')
		console.log('f1(1)',f1(1)) // [window, 1]
		console.log('f2(1)',f2(1)) // [window, 1]
		console.log('af(1)',af(1)) // [window, 1]

		console.log('call 6: fn.call():')
		console.log("f1.call('t','2')",f1.call('t','2')) // [String { "t" }, 1]
		console.log("f2.call('t','2')",f2.call('t','2')) // [String { "t" }, 1]
		console.log("af.call('t','2')",af.call('t','2')) // [window, 1]


		// For bind & apply:
		// The value of this provided for the call to func. If the function is NOT in strict mode, 
		// null and undefined will be replaced with the global object, and primitive values will be converted to objects.

		console.log('call 6: fnBinded.call(this, ...args):')
		// bind was saved
		console.log("f1Binded.call('t','2')",f1Binded.call('t','2')) // [String { "bind" }, 1]
		console.log("f2Binded.call('t','2')",f2Binded.call('t','2')) // [String { "bind" }, 1]
		console.log("afBinded.call('t','2')",afBinded.call('t','2')) // [window, 1]

		console.log('call 7: fnBinded.apply(this, [...args]):')
		// bind was saved
		console.log("f1Binded.apply('t',['2'])",f1Binded.apply('t',['2'])) // [String { "bind" }, 1]
		console.log("f2Binded.apply('t',['2'])",f2Binded.apply('t',['2'])) // [String { "bind" }, 1]
		console.log("afBinded.apply('t',['2'])",afBinded.apply('t',['2'])) // [window, 1]

		{
			// Arguments after this is to prepend to arguments provided to the bound function when invoking func.
			function log(...args) {
				console.log(this, ...args);
			}
			const boundLog = log.bind("this value", 1, 2);
			const boundLog2 = boundLog.bind("new this value", 3, 4);
			boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
		}
	}







	// 'function' - инициализируется сразу в своей функциональной области (можно вызывать до объявления)
	// функциональная область - весь код в блоке текущего объявления 'function'
	//							Код в функциональных подблоках - недостижим для вызова (function is not defined)
	//							Код в обычных подблоках - объявленные там var & function будут undefined, пока код их объявления не исполнится


	console.log("-------------------------");
	console.log("before funnn1 code:")

	// ReferenceError: fun122 is not defined
	try{ fun122() } catch (e) { console.warn(e) } 

	// ReferenceError: fun120 is not defined
	try{ fun120() } catch (e) { console.warn(e) } 

	// ReferenceError: fun118 is not defined
	try{ fun118() } catch (e) { console.warn(e) }

	// ReferenceError: fun124 is not defined
	try{ fun124() } catch (e) { console.warn(e) }

	// ReferenceError: fun125 is not defined
	try{ fun125() } catch (e) { console.warn(e) }

	funnn1();

	function funnn1() {
		console.log("inside funnn1:")
		
		// ReferenceError: fun122 is not a function
		try{ fun122() } catch (e) { console.warn(e) }
		console.log('fun122===undefined',fun122===undefined) // true

		// ReferenceError: fun120 is not a function
		try{ fun120() } catch (e) { console.warn(e) } 
		
		// ReferenceError: fun118 is not a function
		try{ fun118() } catch (e) { console.warn(e) }	
		
		// ReferenceError: can't access lexical declaration 'fun125' before initialization
		try{ fun125() } catch (e) { console.warn(e) }	

		fun124() // OK

		// ReferenceError: randomFunctionCall is not defined
		try{ randomFunctionCall() } catch (e) { console.warn(e) }

		if (true) {
			console.log("inside funnn1 if(true) block start:")

			fun122() // OK

			// ReferenceError: fun120 is not a function
			try{ fun120() } catch (e) { console.warn(e) } 
			
			// ReferenceError: fun118 is not a function
			try{ fun118() } catch (e) { console.warn(e) }
		
			// ReferenceError: can't access lexical declaration 'fun125' before initialization
			try{ fun125() } catch (e) { console.warn(e) }	


			function fun122() { console.log("=> fun122") }


			console.log("inside funnn1 if(true) block end:")

			fun122() // OK

		} else {
			function fun120(){ console.log("=> fun120") }
		}


		{
			console.log("inside funnn1 { } block start:")

			fun122();

			// ReferenceError: fun120 is not a function
			try{ fun120() } catch (e) { console.warn(e) } 

			fun118();
		
			// ReferenceError: can't access lexical declaration 'fun125' before initialization
			try{ fun125() } catch (e) { console.warn(e) }	

			function fun118() { console.log("=> fun118") }

			console.log("inside funnn1 { } block end:")
			
			fun118();
		}

		function fun124(){ console.log("=> fun124") }

		const fun125 = function(){ console.log("=> fun125") }

		
		console.log("inside funnn1 end:")

		fun122() // ok

		// ReferenceError: fun120 is not a function
		try{ fun120() } catch (e) { console.warn(e) } 

		fun118() // ok

		fun125() // ok
	}

	console.log("after funnn1 code:")

	// ReferenceError: fun122 is not defined
	try{ fun122() } catch (e) { console.warn(e) } 

	// ReferenceError: fun120 is not defined
	try{ fun120() } catch (e) { console.warn(e) } 

	// ReferenceError: fun118 is not defined
	try{ fun118() } catch (e) { console.warn(e) }

	// ReferenceError: fun118 is not defined
	try{ fun124() } catch (e) { console.warn(e) }

	// ReferenceError: fun125 is not defined
	try{ fun125() } catch (e) { console.warn(e) }

	console.log("-------------------------");






	// функции
	function func(argument) { // ПЕРВОЕ ОБЪЯВЛЕНИЕ ФУНКЦИИ
		console.log(argument+"klhglkhasldfg");
	}

	// БУДЕТ ВЫЗЫВАТЬСЯ ПЕРЕОПРЕДЕЛЁННАЯ ФУНКЦИЯ
	func(); // argument -> undefined
	func("string arg"); // аргумент - строка
	func(57+3); // аргумент - число
	func(0.5, "lkadjflkl"); // лишние аргументы игнорятся
	function func(argument) { // ФУНКЦИЯ БЫЛА ПЕРЕОПРЕДЕЛЕНА
		console.log(argument);
	}

	console.log("-------------------------");



	// стрелочные функции
	const arrowFunc1 = () => {
		console.log(arrowFunc);
	}
	const arrowFunc2 = () => "returning string"; // короткая запись
	const arrowFunc3 = () => ({description: "returning object"}); // короткая запись - создание и возврат объекта
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

}