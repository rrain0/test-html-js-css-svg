



function arrayTest(){
	console.log("-----------------------------------------------ARRAY");

	{
		/*
		Array is: [<empty>, <empty>, undefinded, undefined, null, null, 123]
		*/
		let arr = [, , undefined, undefined, null, null, 123]
		console.log("first arr: [<empty>, <empty>, undefinded, undefined, null, null, 123]:")
		console.log(arr)

		arr = arr.map((val,idx)=>idx)
		console.log("mapped arr: empties doesn't participate in mapping:")
		console.log(arr)
	}

	{
		let arr = ["str1", "adsflkl", "string 3"];


		//map( (elem, idx)=>{...} ) - возвращает новый массив, применяя функцию к каждому элементу
		console.log(arr.map(elem => elem+" ABC"));
		console.log(arr.map((elem,idx) => elem+" ABC "+idx));

		//push(elem...) - добавить в конец, возвращает длину массива (после добавления)
		console.log("new arr len: " + arr.push("appended"));
		console.log(arr);

		//forEach((item, idx, arr) => {...}) - сделать что-то для каждого элемента
		arr.forEach(elem => console.log(elem));

		//find(<<<функция-условие>>>) вернёт элемент или undefined
		console.log("was found::: " + arr.find(elem => elem === "adsflkl"));

		//findIndex(<<<функция-условие>>>) - найти индекс элемента
		console.log("index of adsflkl::: " + arr.findIndex(elem => elem === "adsflkl"))

		//filter(<<<функция-условие>>>) - оставить элементы, удовлетворяющие условию
		console.log(arr.filter(elem => elem !== "adsflkl")) //элемент "adsflkl" будет удалён из полученного массива
	}

	{
		let arr = ["first", "second", "third"];
		console.log(arr)

		// reduce((prevValue, item, idx, arr) => {... return Value})
		// - начальное значение - первый элемент массива, проход со второго элемента
		//
		// reduce((prevValue, item, idx, arr) => {... return Value}, initialValue)
		// - начальное значение - initialValue
		//
		// reduceRight - обход с конца в начало
		//
		// Value станет prevValue для следующего вызова
		console.log("reduce in sum: " + arr.reduce((prev, elem) => prev+elem))
	}


	{
		// SPLICE
		console.log("ARR TO SPLICE:")
		let arr = ["first", "second", "third", "fourth"];
		console.log(arr)

		// [deletedItems...] = splice(s, deleteCnt, itemsToInsert...)
		// s - стартовый индекс:
		// если больше длины => станет равен длине
		// если отрицательный => отсчёт с конца
		// deleteCnt - кол-во элементов чтобы удалить, если не указано, удалит все элементы от s и до конца массива
		// itemsToInsert - вставляемые элементы

		console.log("splice(1, 2, 2, 3):")
		arr.splice(2,2,2,3)
		console.log(arr)
	}
	
	{
		//shift() - извлечь первый элемент массива
		let arr = ["str1", "adsflkl", "string 3"];

		console.log("7:")
		console.log(arr.shift());
		console.log(arr);
	}
	{
		//slice(s, e) - создать новый массив начиная с s по e (e можно не писать, тогда до конца массива)
		let arr = ["str1", "adsflkl", "string 3"];

		console.log("8:")
		console.log(arr.slice(1,2));
		console.log(arr.slice(1,10)); //если коненый индекс за границей, то просто берутся элементы до конца массива
		console.log(arr);
	}
	{
		//length - узнать длину массива
		let arr = ["str1", "adsflkl", "string 3"];

		console.log("9:")
		console.log(arr.length);
	}
	{
		// CONTAINS
		// includes - узнать, содержит ли массив элемент
		let arr = ["str1", "adsflkl", "string 3"];

		console.log("CONTAINS (INCLUDES):")
		console.log(arr.includes("str"));
		console.log(arr.includes("str1"));
		console.log(arr.includes(undefined));
	}
	{
		//some - вернуть true, если условие удовлетворено хоть раз
		let arr = ["str1", "adsflkl", "string 3"];

		console.log("10:")
		console.log(arr.some( el => el === "adsflkl")); // => true
		console.log(arr.some( el => el === "")); // => false
	}
	{
		//every - вернуть true, если условие удовлетворено для всех элементов
		let arr = ["str1", "adsflkl", "string 3"];

		console.log("11:")
		console.log(arr.every( el => el.length > 2)); // => true
		console.log(arr.every( el => el.length > 4)); // => false
	}
	{
		// unshift - добавить элементы в начало
		// unshift: (...items) => new length
		let arr = ["str1", "adsflkl", "string 3"];

		console.log("11:")
		console.log(arr.every( el => el.length > 2)); // => true
		console.log(arr.every( el => el.length > 4)); // => false
	}
	{
		// flat(depth = 1) - возвращает новый массив, 
		// в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
		// depth - максимальное количество подъёмов элементов вверх по вложенности
		// дополнительно flat удаляет пустые (empty, но не undefined) ячейки
		let arr = [1, 2, [3, 4, [5, 6], 7, undefined, , [8, 9]]]; // после undef идёт empty

		console.log("FLAT:")
		console.log(arr)

		console.log(arr.flat()); // => [1, 2, 3, 4, [5, 6], 7, undefined, [8, 9]]
		console.log(arr.flat(2)); // => [1, 2, 3, 4, 5, 6, 7, undefined, 8, 9]
		console.log(arr.flat(Infinity)); // => [1, 2, 3, 4, 5, 6, 7, undefined, 8, 9]
	}
	{
		let arr = ["str1", "adsflkl", "string 3", "black hole", "neutron star"];

		//ДЕСТРУКТУРИЗАЦИЯ массива - array destructuring
		console.log("12:");
		{
		console.log("let a, b; [a, b] = arr;");
			let a, b;
			[a, b] = arr;
			console.log(arr);
			console.log(`a = ${a}; b = ${b}`);
		}
		{
			console.log("let [a, b, ...c] = arr;");
			let [a, b, ...c] = arr;
			console.log(`a = ${a}; b = ${b}`);
			console.log(c); // в c отправились остатки массива с конца (с начала и с середины - не работает)
		}
		// кстати либо объявляем все переменные в операторе деструктуризации (let [a, b] = arr;), 
		// либо отправляем туда все уже объявленные переменные (let a, b; [a, b] = arr;)
		{
			console.log("let [a, b, , c] = arr; - пропуск индекса");
			let [a, b, , c] = arr;
			console.log(`a = ${a}; b = ${b}; c = ${c}`);
		}

		console.log("----------------------------------------------------");
	}


}



