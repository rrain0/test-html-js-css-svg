

/*
JS Engine tasks priority:
1) Microtasks (Promises):
	Always highest priority.
	Used for Promises (.then, .catch, .finally), queueMicrotask(), and in Node.js, process.nextTick().
	They execute immediately after the current task finishes and before the browser moves to anything else.
2) requestAnimationFrame (Animation Tasks):
	Executed during the "Update the rendering" phase of the event loop.
	This happens before the browser repaints the screen.
3) Macrotasks (setTimeout, UI events):
	Generally the lowest priority.
	Used for setTimeout, setInterval, setImmediate, I/O operations, UI events (button clicks, ...).
	These are queued and executed one by one in subsequent turns of the event loop.

Key Differences in Execution:
1) Priority Rule:
	The engine must exhaust the entire Microtask Queue before it can move on to the next task in the Macrotask Queue.
2) UI event vs timeout priority:
	While both are macrotasks, browsers often prioritize User Input over Timers to ensure the app feels responsive.
2) Timing:
	Even if a setTimeout is set to 0ms, a promise that resolves at the same time will always execute its callback first.
3) Starvation:
	If microtasks continuously add more microtasks to the queue,
	they can "starve" the macrotask queue, potentially causing the browser to freeze or preventing setTimeout from ever running.

TOTAL:
All microtasks -> all animation tasks -> render UI -> all macrotasks (UI event -> Timeout)
If after current task execution there is created another higher-priority task, then it runs immediately.
*/

function asyncMacroMicroTasksTest() {
	console.log('script start')

	setTimeout( () => console.log('setTimeout'), 0) // создание МАКРОзадачи

	Promise.resolve() // создание МИКРОЗАДАЧИ
	.then( () => console.log('promise1') )
	.then( () => console.log('promise2') )

	console.log('script end')
}


/*
ВЫВОД в консоль:
	script start // CURRENT task started
	script end // CURRENT task completed
	promise1 // MICROtask completed
	promise2 // MICROtask completed
	// rendering UI (run rafs then render)
	setTimeout // next MACROtask completed
*/

/*
эмуляция работы движка JS:
https://tproger.ru/translations/js-engine-macrotasks-microtasks/
*/