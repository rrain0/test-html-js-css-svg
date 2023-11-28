


function testAsyncAndPromises2(){
	console.log("----------------------------------------ASYNC AND PROMISES 2");

	



	// promiseA.then/catch/finally никогда не выпонятся, потому что этот промис никогда не settled
	const promiseANotSettled = new Promise((resolve, reject)=>{
		//resolve("123");
		console.log("PromiseA completed but not settled");
	});
	promiseANotSettled
		.then(val=>console.log("this do not execute "+val))
		.catch(err=>console.log("this do not execute "+err))
		.finally(()=>console.log("this do not execute"));


	// Любая функция then / catch / finally возвращает новый промис!!!

	// finally test
	// finally возвращает новый промис идентичный старому
	{
		// finally возвращает новый промис
		const p1 = Promise.resolve()
		const p2 = p1.finally()
		console.log('Promise before and after finally: ', p1===p2) // false
		console.log('Promise === self: ', p1===p1) // true

		// finally возвращает новый промис,
		// но не влияет на его результат - новый промис просто клон старого,
		// а возвращаемое из finally значение просто игнорится
		Promise.resolve('finally test 1')
			.finally()
			.then(val=>console.log(val)) // finally test 1
		Promise.resolve('finally test 2')
			.finally(()=>{})
			.then(val=>console.log(val)) // finally test 2
		Promise.resolve('finally test 3')
			.finally(()=>'finally test 3**')
			.then(val=>console.log(val)) // finally test 3
		Promise.resolve('finally test 4')
			.finally(()=>Promise.resolve('finally test 4**'))
			.then(val=>console.log(val)) // finally test 4
		Promise.reject('finally test 5')
			.finally(()=>Promise.resolve('finally test 5**'))
			.catch(err=>console.log(err)) // finally test 5
	}

	{
		const p1 = Promise.resolve()
		const p2 = p1.catch(err=>{})
		console.log('Promise before and after not executed catch: ', p1===p2) // false
	}

	{
		// catch() - не сработает
		// catch(err=>{}) - сработает
		// catch должен быть вызван сразу цепным вызовом!! (без промежуточного сохранения промиса в переменную)
		// иначе браузер выведет сообщение об ошибке в консоль
		const p1 = Promise.reject().catch(err=>{})
		const p2 = p1.then(val=>{})
		console.log('Promise before and after not executed then: ', p1===p2) // false
		p2.catch()
	}

	{
		const p1 = Promise.resolve('saved into variable')
		p1.then(val=>console.log(val)) // работает
	}


	/*
	В общем:
	1) Если не оказалось нужной функции хэндлера - промис прокинется дальше без изменений над ним.
	2) Если функция хэндлер нашлась, то она выполнится, и всегда будет возвращён НОВЫЙ промис, созданный хэндлером:
		2.1) Из хэндлера явно возвращается промис - он же пойдёт дальше по цепочке без всяких изменений над ним.
		2.2) Функция хэндлер возвращает значение (не промис) (если ничего не возвращается - вернулся undefiined).
			 Тогда это значение value поместится в Promise.resolve(value), который вернётся хэндлером.
			 Так делает любой хэндлер then/catch/finally.
	*/
	const promsieBResolved = Promise.resolve("resolved B0");
	promsieBResolved
		// метод вернёт Promise.resolve(val+" and then B1")
		.then(val=>{return val+" and then B1"})
		 // метод вернёт Promise.resolve(undefined)
		.then(val=>{console.log(val+" and then B2")})

		.then(val=>{console.log(val+" and then B3")})
		 // метод вернёт Promise.reject("rejected B4")
		.then(val=>{return Promise.reject("rejected B4")})
		 // метод вернёт Promise.resolve(undefined)
		.catch(err=>{ console.log("and catch B5 "+err)})
		 // вернёт new Promise((resolve, reject)=>{console.log("Not settled")}) и цепочка дальше не выполнится
		.then(val=>{return new Promise((resolve, reject)=>{console.log("Not settled B6")})})

		.then(val=>console.log("this do not execute "+val))
		.catch(err=>console.log("this do not execute "+err))
		.finally(()=>console.log("this do not execute"));



	Promise.resolve("resolved").then(resolvedValue=>{
		console.log(resolvedValue) // => resolved
		return Promise.reject("rejected")
	}).catch(err=>console.log(err)); // => rejected








	/*
	async функция - возвращает промис, созданный внутри неё с помощью:
	return <new Promise> ИЛИ await <new Promise>
	либо если внутри не создан промис, она создаст Promise.resolve(undefined)
	await - возвращает переданный ему промис и вызывает у него then чтобы достать onResolvedValue
	+ вся остальная часть кода помещается следующий в then для этого промиса
	если промис в await не передан, то создаётся Promise.resolve(undefined)
	*/

	/*
	let value = await promise:
	1) У promise вызывается then 
		(если promise - не является объектом Promise, то promise = Promise.resolve("promise"))
	2) Весь код после await и до конца async блока становится контентом колбэка onResolveFunc в этом then
	3) value считай является переданным в onResolveFunc
	*/

	/*
	async блок просто возвращет промис, возвращённый изнутри
	или, если вернулось value, не являющееся промисом, то async вернёт Promise.resolve("value")
	(если изнутри ничего не вернулось - равносильно return undefined)
	*/
	(async ()=>{
		await Promise.reject("REJECTED 1");

		// эта строка не выполнится, т.к. всё что после await является содержимым onResolve в then, 
		// но нам нужен onReject (в catch например)
		console.log("CODE AFTER AWAIT 1");

	})().catch(err=>console.log("interesting err 1: "+err)); // выведет: interesting err: REJECTED
	// если rejected промис не обработать, то будет uncaught исключение


	(async ()=>{
		const value = await "2"; // создаст Promise.resolve("2") и достанет value с помощью then;

		// эта строка попадёт в then и выполнится
		console.log("CODE AFTER AWAIT 2");
		return value;
	})().then(val=>console.log("interesting val 2: "+val)); // выведет: interesting val 2: undefined

	// т.к. не было создано промисов внутри, async вернёт Promise.resolve(undefined) после окончания этой функции
	(async ()=>{ 

		// эта строка выполнится синхронно
		console.log("CODE AFTER AWAIT 3");

		return "val from inside async 3"; // async вернёт Promise.resolve("val from inside async 3");
	})().then(val=>console.log("interesting val 3: "+val)); // выведет: interesting val 2: undefined



	// BOTH THE SAME:
	async function awaitInCodeChain() {
		return {
			p1: await Promise.resolve("p1"),
			p2: await Promise.resolve("p2")
		}
	}
	async function awaitInCodeChainAnalogue() {
		const p1 = await Promise.resolve("p1");
		const p2 = await Promise.resolve("p2");
		return {
			p1,
			p2
		}
	}







	const promiseC = Promise.resolve("promiseC resolved value");
	const promiseD = Promise.resolve("promiseD resolved value");
	const promiseE = Promise.resolve("promiseE resolved value");

	const promiseF = Promise.reject("promiseF rejected value");
	const promiseG = Promise.reject("promiseG rejected value");
	const promiseH = Promise.reject("promiseH rejected value");

	const promiseI = new Promise((resolve, reject) => {"promiseI pending"});
	const promiseJ = new Promise((resolve, reject) => {"promiseJ pending"});
	const promiseK = new Promise((resolve, reject) => {"promiseK pending"});

	// then просто прокинул promise дальше, т.к. нет функции колбэка
	// и этот промис уже создался, так что можно его посмотреть синхронно
	console.log(promiseI.then(console.log("alkdfkhaklhgAAAAAA")));

	// синхронно выведется состояние pending, но после выполнения функции, оно изменится на fulfilled
	console.log(promiseC.then(val=>{console.log(val+"CCCCCCCCCCCC"); return "promise C2"}));

	// в консоль выведется: Promise {<fulfilled>: "promiseC resolved value"}
	console.log(promiseC);




	// Создаёт новый промис, который удовлетворён, 
	// если каждый переданный в массиве промис удовлетворён.
	// Все результаты промисов идут в массив valuesArr.
	// Иначе кидает ошибку в catch
	Promise.all([promiseC, promiseD, promiseE]) // all fulfilled => onResolveCallback
		.then(valuesArr=>console.log(valuesArr))
		.catch(oneErr=>console.log(oneErr));

	Promise.all([promiseC, promiseF, promiseI]) // fulfilled, rejected, pending => onRejectCallback
		.then(valuesArr=>console.log(valuesArr))
		.catch(oneErr=>console.log("all: oneErr: "+oneErr));
	// all pending => ждём хотя бы одного settled



	// Ждёт когда все промисы завершаться с любым результатом.
	// Возвращает промис с массивом из результатов переданных промисов.
	Promise.allSettled([promiseC, promiseD, promiseF, promiseG])
		.then(allSettledPromisesArr=>console.log(allSettledPromisesArr));



	// Ждёт когда один из промисов resolved
	// Если все rejected, возвращает AggregateError object with errors property (array).
	Promise.any([promiseF, promiseI, promiseC])
		.then(oneVal=>console.log("any resolved val: "+oneVal));

	Promise.any([promiseF, promiseG])
		.then(oneVal=>console.log("any resolved val: "+oneVal))
		.catch(aggretateError=>{console.log(aggretateError); console.log(aggretateError.errors);});




	// Ждёт, когда хоть один станет settled
	Promise.race([promiseC, promiseF, promiseI]) // fulfilled, rejected, pending
		.then(oneVal=>console.log("race one resolved: "+oneVal)) // => race one resolved: promiseC resolved value
		.catch(oneErr=>console.log("race one rejected: "+oneErr));

	Promise.race([promiseF, promiseC, promiseI]) // rejected, fulfilled, pending
		.then(oneVal=>console.log("race one resolved: "+oneVal))
		.catch(oneErr=>console.log("race one rejected: "+oneErr)); // => race one rejected: promiseF rejected value
	
	
	
	
	
	{ // Error propagation

    // If we not await / then / catch then it will be deferred and uncaught
		async function one(){
			return 1
		}
		async function err(){
			throw new Error('raise error')
		}
		
		
		function start0(){
			one().then(()=>{
				err() // !!! will be uncaught error in its own async thread
				console.log('continuing start0...') // it executes
			})
				.catch(err=>console.log('caught err'))
			console.log('exiting start0...') // it executes
		}
		async function startAwait0(){
			try{
				await one()
				err() // !!! will be uncaught error in its own async thread
				console.log('continuing startAwait0...') // it executes
			} catch (e){
				console.log('caught err')
			}
			console.log('exiting startAwait0...') // it executes
		}
		async function startAwait01(){
			try{
				await one()
				try{
					err() // !!! will be uncaught error in its own async thread
					console.log('continuing startAwait01...') // it executes
				} catch (e){
					console.log('caught err 0')
				}
			} catch (e){
				console.log('caught err')
			}
			console.log('exiting startAwait01...') // it executes
		}
		
		
		function start1(){
			one().then(()=>{
				err().then() // !!! will be uncaught error
			})
				.catch(err=>console.log('caught err'))
			console.log('exiting start1...') // it executes
		}
		async function startAwait1(){
			try{
				await one()
				await err()
			} catch (e){
				console.log('caught err') // !!! caught here
			}
			console.log('exiting startAwait1...') // it executes
		}
		
		
		function start2(){
			one().then(()=>{
				err().catch(err=>console.log('caught err 0')) // !!! caught here
			})
				.catch(err=>console.log('caught err'))
			console.log('exiting start2...') // it executes
		}
		async function startAwait2(){
			try{
				await one()
				try{
					await err()
				} catch (e){
					console.log('caught err 0')// !!! caught here
				}
			} catch (e){
				console.log('caught err')
			}
			console.log('exiting startAwait2...') // it executes
		}
		
	}
	
	
	{
		// Multiple handlers for single Promise will work
		const p = Promise.resolve(1)
		p.then(v=>console.log(v+1)) // => 2
		p.then(v=>console.log(v+2)) // => 3
		
	}
	




	//console.log("----------------------------------------------------------");
}





