



function arrayTest(){
	console.log("-----------------------------------------------ARRAY");

	{
		let arr = ["str1", "adsflkl", "string 3"];


		//map( (elem, idx)=>{...} ) - возвращает новый массив, применяя функцию к каждому элементу
		console.log(arr.map(elem => elem+" ABC"));
		console.log(arr.map((elem,idx) => elem+" ABC "+idx));

		//push(elem) - добавить в конец, возвращает длину массива (после добавления)
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
		let arr = ["str1", "adsflkl", "string 3"];

		//shift() - извлечь первый элемент массива
		console.log("7:")
		console.log(arr.shift());
		console.log(arr);
	}
	{
		let arr = ["str1", "adsflkl", "string 3"];

		//slice(s, e) - создать новый массив начиная с s по e (e можно не писать, тогда до конца массива)
		console.log("8:")
		console.log(arr.slice(1,2));
		console.log(arr.slice(1,10)); //если коненый индекс за границей, то просто берутся элементы до конца массива
		console.log(arr);
	}
	{
		let arr = ["str1", "adsflkl", "string 3"];

		//length - узнать длину массива
		console.log("9:")
		console.log(arr.length);
	}
	{
		let arr = ["str1", "adsflkl", "string 3"];

		//some - вернуть true, если условие удовлетворено хоть раз
		console.log("10:")
		console.log(arr.some( el => el === "adsflkl")); // => true
		console.log(arr.some( el => el === "")); // => false
	}
	{
		let arr = ["str1", "adsflkl", "string 3"];

		//every - вернуть true, если условие удовлетворено для всех элементов
		console.log("11:")
		console.log(arr.every( el => el.length > 2)); // => true
		console.log(arr.every( el => el.length > 4)); // => false
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



