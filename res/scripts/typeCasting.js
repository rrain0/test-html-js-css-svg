


function typeCastingTest(){

	console.log("----------------------------------------------TYPE CASTING");


//вернёт первый элемент, который кастится в true, либо последний элемент
	console.log("" || null || {} || "str" || "str2"); // => {}
	console.log("" || null || undefined); // => undefined

//вернёт первый элемент, который кастится в false, либо последний элемент (объект)
	console.log(false && "---1234----"); // => false
	console.log(undefined && "---1234----"); // => undefined
	console.log(true && "---1234----"); // => ---1234----


// каст в boolean
	console.log("Boolean(0): " + Boolean(0)); // => false
	console.log("Boolean(1): " + Boolean(1)); // => true
	console.log("Boolean(-1): " + Boolean(-1)); // => true
	console.log("Boolean(undefined): " + Boolean(undefined)); // => false
	console.log("Boolean(null): " + Boolean(null)); // => false

// каст в число
	console.log("Number(\"12345\"):");
	console.log(Number("12345")) // Number(строка)
	console.log("\"+12345\":");
	console.log(+"12345") // +строка



// == сравнить с приведением типов
// === сравнить без приведения типов
// с undefined и null каке-то особые правила

	console.log("\"01\" == 1: " + ("01" == 1)); // => true (with type casting)
	console.log("\"01\" === 1: " + ("01" === 1)); // => false

	console.log(!!undefined === !!0); // => true
	console.log(undefined === 0); // => false
	console.log("undefined === NaN: " + (undefined === NaN)); // => false
	console.log("undefined == NaN: " + (undefined == NaN)); // => true
	console.log("!undefined: " + !undefined); // => true

//походу объекты равны только если это один и тот же объект по ссылке
	console.log({name: "ivan", id: 7} == {name: "ivan", id: 7});
	console.log({name: "ivan", id: 7} === {name: "ivan", id: 7});
	const obj4 = {name: "ivan", id: 7};
	console.log(obj4 == obj4);
	console.log(obj4 === obj4);


	{
		//null и undefined кастятся в false
		let obj1 = undefined;
		if (!obj1) {console.log("no obj")} else {console.log("obj exists")}
		let obj2 = null;
		if (!obj2) {console.log("no obj")} else {console.log("obj exists")}
		let obj3 = {property: "i am an object"};
		if (!obj3) {console.log("no obj")} else {console.log("obj exists")}
	}


	console.log("-----------------------------------------------------");


}

