

{
	console.log("-------------BROWSER INTERACTION");

	const logIntoConsole = () => console.log("log into console");
	const warnIntoConsole = () => console.warn("warn into console e.g.: Obsolete method. Please use.......");
	const errIntoConsole = () => console.error("err into consle: AAAAAAAA");

	// Show a message to the user and wait synchronously for him to close it.
	const alertNotification = () => alert("default alert browser notification");
	
	// Ask user and wait synchronously for an answer. Returns true or false.
	const showDialog = () => confirm('Подтвердить?')
	
	// Prompt user some input and wait synchronously. Returns string.
	const promptUser = () => prompt('Введите текст')


	// имеет глобальную область видимости
	function clickMeBtnAction(){
		let val = document.getElementById("text-area").value;
		if (!val) val = "deafault browser notification";
		alert(val);
	}



	let someState = {
		id: 4,
		value: "adlkflk",
	}
	window.someState = someState;
	//теперь пишем в консоль someState и видим его значение



	// В консоли можно обращаться к объекту текущей страницы типа this.props в React



	// В консоли -> Network -> Online изменить на Slow 3G чтобы эмулировать медленный инет





	// Чтобы остановить выполнение скрипта в этом месте и в браузере можно смотреть значение переменных, 
	// нужно написать degugger; в коде и быть с открытой консолью разработчика
	const debugHere = () => {
		debugger;
	}


	// Запланировать асинхроное выполнение функции через 3000 мс.
	// Через назначенное время функция будет кинута в очередь и выполнится
	const deferFunctionExecution = () => {
		window.setTimeout( ()=>alert("было отложено на 3000 мс"), 3000);
	}
	






	//logIntoConsole();
	//warnIntoConsole();
	//errIntoConsole();
	//alertNotification();
	//debugHere();
	//deferFunctionExecution();




	console.log("-------------BROWSER INTERACTION END");
}
