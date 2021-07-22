


function testAsyncAndPromises(){
	console.log("----------------------------------------ASYNC AND PROMISES");

	/*
	Асинхронность JavaScript.
	В JavaScript есть только один поток - UI и за раз может выаоняться только одна функция.
	Можно отложить выополнение функции напотом, но когда функция начнёт выполняться, 
	её выполнение не может быть остановлено, пока она не закончится.
	Только после оконяания функции может асинхронно может быть выбрана другая функция.
	Это и есть асинхронность однопоточного режима.

	Асинхронность в JS принципе создают ТОЛЬКО ФУНКЦИИ-КОЛБЭКИ.

	Функции-колбэки от UI элементов (нажатие на кнопку напрмер) 
	кидаются в очередь (всегда в конец очереди) на выполнение и выполняются.

	Другой вариант функций колбэков - колбэк действительно из другого потока, 
	который был реализован библиотечной функцией за пределами JS (напрмер запрос данных из сети по https),
	но вызван в JS и за кулисами выполнялся в отдельном потоке.
	Такие колбэки тоже кидаются в очередь JS движку (всегда в конец очереди)


	Асинхронные операции выполняются не в движке, а в окружении. 
	(Как подсказал forgotten это не совсем так: 
	мы можем из стека вызовов сразу же положить функцию в очередь вызовов 
	и таким образом чистый движок тоже будет работать асинхронно)
	Окружение — надстройка над движком. NodeJS и Chrome для движка V8 и Firefox для Gecko. 
	Иногда окружение еще называют web API.
	Чтобы создать асинхронный вызов, в web API передается ссылка на функцию, 
	которая выполнится позже или не выполнится вовсе.
	У функции есть свой контекст или своя область памяти, в которой она определена. 
	Функция имеет доступ к этой области памяти и ко всем родителям этой области памяти. 
	Такие функции называются замыканиями. 
	С этой точки зрения, все функции в JavaScript — замыкания, так как все они имеют контекст.
	Web API и JavaScrtipt движок работают независимо. 
	Web API решает, в какой момент функция двигается дальше, в очередь вызовов.
	*/




	/*
	Promise - его можно воспринимать как место возвращения результата из другого потока.
	Промис всегда асинхронен - новый промис является микрозадачей 
	и будет выполнен сразу после текущей макрозадачи (текущей функции).


	СОСТОЯНИЯ:
		pending
		settled:
			fulfilled (resolved) (means operation successful)
			rejected (means operation failed)
	A pending promise can either be fulfilled with a VALUE or REJECTED with a REASON (ERROR).


	THEN:
	Принимает resolved промис, и, если указан колбэк onRejectFunc, то rejected промис тоже
	promise.then(onResolveFunc) или promise.then(onResolveFunc, onRejectFunc) - возвращает новый промис
	Если onRejectFunc пропущен, то при возникновении отклонения промиса, 
	новый промис пойдёт по цепочке, пока не встретит then с onRejectFunc или catch.

	CATCH:
	Принимает отклонённый (rejected) промис
	promise.catch(onRejectFunc) - возвращает новый промис


	FINALLY:
	promise.finally(onFinally) - выпоняется для любого (settled) промиса - возвращает новый промис

	В then/catch/finally по сути пишется код нового промиса и он возвращается в статусе fulfilled 
	со значением value, которое return в хэндлере в методе then/catch.
	Если нет хэндлера для данного промиса, то он просто прокидывется дальше.
	Если хэндлер сработал, но метод ничего не возвращает, то возвращается Promise.resolve(undefined).
	finally всегда прокидывает текуший промис дальше (нет функции хэндлера).


	onResolveFunc = (value) => {...}
	onRejectFunc = (error) => {...}
	onFinally = (<no args>) => {...}


	ВНУТРИ ПРОМИСА:
	resolve(val) - зарезолвить промис и создать следующий(-ие)
	reject(err) - отклонить промис и создать следующий(-ие)
	Работает только первый вызов одного из этих методов - остальные не принесут эффекта.
	*/

	// Код только что созданного промиса выполнится синхронно,
	// а код следующего будет помещён в очередь микрозадач и выполнится после этой функции
	const promiseA = new Promise((resolve, reject)=>{
		resolve("123");
		console.log("PromiseA completed");
	});
	const promiseARej = new Promise((resolve, reject)=>{
		reject("123rej");
		console.log("PromiseARej completed");
	});
	// будут вызваны все then/catch/finally и создадутся по новому промису на каждого из них
	// Т.е. каждый вызов then/catch/finally создаёт новый промис по переданному им внутрь коду
	const promiseB = promiseA.then( val=>{
		console.log("then B: "+val); 
		return ("then B: "+val);
	})//.then(val=>console.log(val+"undef"), err=>console.log(err+"undef"));
	const promiseC = promiseA.then( val=>{
		console.log("then C: "+val);
		//return ("then C: "+val);
	});
	const promiseD = promiseARej.catch( err=>{
		console.log("catch E: "+err);
		return ("catch E: "+err);
	});
	const promiseE = promiseA.then( 
		val=>{
			console.log("then D: "+val);
			//return ("then D: "+val);
		}, 
		err=>{
			console.log("catch D: "+err);
			//return ("catch D: "+err);
	});
	const promiseF = promiseA.finally( ()=>{
		console.log("finally I");
	});



	Promise.resolve("resolved value").then(val=>console.log(val));
	Promise.reject("rejction reason").catch(val=>console.log(val));


	// Создаёт новый промис, который удовлетворён, 
	// если каждый переданный в массиве промис удовлетворён.
	// Все результаты промисов идут в массив valuesArr.
	// Иначе кидает ошибку в catch
	Promise.all([promiseB, promiseE, promiseF])
		.then(valuesArr=>console.log(valuesArr))
		.catch(oneErr=>console.log(oneErr));

	// Ждёт когда все промисы завершаться с любым результатом
	Promise.allSettled([promiseB, promiseC, promiseD, promiseF]).then(allValuesArr=>console.log(allValuesArr));

	// Ждёт когда один из промисов resolved
	// Если все rejected, возвращает AggregateError object with errors property (array).
	Promise.any([promiseB, promiseC, promiseF]).then(oneVal=>console.log(oneVal));

	// Ждёт, когда хоть один станет settled
	Promise.race([promiseB, promiseC, promiseF]).then(oneVal=>console.log(oneVal));



	// Ответ на запрос fetch будет асинхронным, т.е. кинут в очередь выполнения через некоторое время спустя

	fetch('https://api.github.com/users/username') // returns Promise
		.then(res => res.json())
		.then(json => console.log("count of public repos (1): "+json.public_repos));
	console.log("log (1)"); // выполнится ДО получения данных из fetch

	fetch('https://api.github.com/users/username') // returns Promise
		.then(res => res.json())
		.then(json => console.log("count of public repos (2): "+json.public_repos))
		.then(resolve => console.log("log (2)")); // выполнится по цепочке ПОСЛЕ получения данных из fetch
	
	(async () => { // async await
	  const res = await fetch(`https://api.github.com/users/username`);
	  const json = await res.json();
	  console.log("count of public repos (3): "+json.public_repos);
	  console.log("log (3)"); // тоже выполнится по цепочке ПОСЛЕ получения данных из fetch
	})();

	console.log("await (3)");



	fetch('https://api.github.com/users/RainFourth') // returns Promise
		.then(res => res.json())
		.then(json => console.log("count of public repos (4): "+json.public_repos));
	console.log("log (4)"); // выполнится ДО получения данных из fetch

	fetch('https://api.github.com/users/RainFourth') // returns Promise
		.then(res => res.json())
		.then(json => console.log("count of public repos (5): "+json.public_repos))
		.then(resolve => console.log("log (5)")); // выполнится по цепочке ПОСЛЕ получения данных из fetch

	(async () => { // async await
	  const res = await fetch(`https://api.github.com/users/RainFourth`);
	  const json = await res.json();
	  console.log("count of public repos (6): "+json.public_repos);
	  console.log("log (6)"); // тоже выполнится по цепочке ПОСЛЕ получения данных из fetch
	})();


	//По факту можно было там не писать второй then и второй await
	/*
	async указвает на область действия await'ов внутри него.
	Если к await попадает Promise, то она автоматически применяет метод then к Promise 
	+ весь код до конца async функции считается частью этого then.
	Т.е. по факту await говорит ждать в этом месте и после выполнения промиса распаковывает его результат дальше.
	Если к await попал не промис (как и к then), то оно просто передаётся дальше (чейнится).
	*/




	// Функция, которая ждёт появление элемента в DOM (проверяет каждые 300 мс)
	const waitForDOM = () => {
		const container = document.querySelector('container');

		if (container.length) {
		// Делаем что-то с контейнером
		} else {
		setTimeout(waitForDOM, 300); // Попробовать снова через 300 миллисекунд
		}
	}
	//waitForDOM();




	// Запланировать асинхроное выполнение функции через 3000 мс.
	// Через назначенное время функция из аргумента setTimeout будет кинута в очередь и выполнится.
	// СИНТАКСИС: let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...) 
	// arg1,2,... передадутся потом в функцию
	// ОТМЕНА таймера:
	// clearTimeout(timerId);
	const deferFunctionExecution = () => {
		window.setTimeout( ()=>console.warn("было отложено на 3000 мс"), 3000);
	}
	deferFunctionExecution();

	// setInterval: выполняет функцию каждые переданные миллисекунды
	// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
	// ОТМЕНА интервала: clearInterval(timerId);

	{
		// повторить с интервалом 2 секунды
		let timerId = setInterval(() => alert('tick'), 2000);

		// остановить вывод через 5 секунд
		setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
	}


	





	// заставить ждать - напрямую нельзя, только через костыли - загрузим/заблокируем UI поток while циклом :)
	// асинхронные результаты естетсвенно тоже не могут исполниться, т.к. очередь обрабытавет эту функцию
	const sleep = (milliseconds) => {
		const date = Date.now(); // возвращает количество миллисекунд, прошедших с 1 января 1970 года
		let currentDate;
		do {
		currentDate = Date.now();
		} while (currentDate - date < milliseconds);
	}
	sleep(3000);
	console.log("поспали 3 секунды - эта функция закончилась");


	// в принципе можно и промис вернуть с setTimeout - типа sleep для асинхронного вызова
	sleepAsync = async (ms) => {
	   return new Promise(resolve => setTimeout(resolve, ms));
	}
	someFunc = async () => {
		await this.sleepAsync(2500);
		// дальше код выполнится через 2500 мс, т.к. будет в then
	}



	//console.log("----------------------------------------------------------");
}