

/*
В очереди на исполнение к движку JS поступают задачи из очереди - МАКРОЗАДАЧИ.

Во время выполнения текущей задачи можно СОЗДАТЬ новые макро/микрозадачи.

После выполнения текущей МАКРОзадачи, выполняются все созданные МИКРОЗАДАЧИ (в порядке их создания)
и только потом выполняется следующая макрозадача.

МИКРОзадачи могут ставить в очередь другие МИКРОзадачи, и все они должны быть исполнены в пределах одного цикла.

Рендеринг UI происходит после исполнения МИКРОзадач.

ИТОГО:
МАКРОзадача -> МИКРОзадачи -> рендеринг UI -> следующая макрозадача
*/

function macroMicroTasksTest() {
	console.log('script start');

	setTimeout( ()=>console.log('setTimeout'), 0); // создание МАКРОзадачи

	Promise.resolve() // создание МИКРОЗАДАЧИ
	.then( ()=>console.log('promise1') )
	.then( ()=>console.log('promise2') );

	console.log('script end');
}


/*
ВЫВОД в консоль:
	script start // MACROtask started
	script end // MACROtask completed
	promise1 // MICROtask completed
	promise2 // MICROtask completed
	// rendering UI
	setTimeout // next MACROtask completed
*/

/*
эмуляция работы движка JS:
https://tproger.ru/translations/js-engine-macrotasks-microtasks/
*/