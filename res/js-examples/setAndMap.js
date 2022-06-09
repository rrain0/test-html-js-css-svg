

function setAndMapTest(){
	console.log("---------------------------------------------------MAP SET");

	// Map - коллекция для хранения записей вида КЛЮЧ:ЗНАЧЕНИЕ.
	// Set - коллекция для хранения уникальных записей.
	
	// WeakSet / WeakMap – особый вид Set / Map, не препятствующий сборщику мусора удалять свои элементы, 
	// если они находятся только внутри коллекции и нигде больше в данный момент не используются.

	// То есть, если некий объект присутствует только в WeakSet/WeakMap – он удаляется из памяти.

	{
		const map = new Map();

		map.set('1', 'str1');   // ключ - строка
		map.set(1, 'num1');     // ключ - число
		map.set(true, 'bool1'); // ключ - булевое значение
		// ключом может быть и объект

		// эквивалентность ключей чекается по ===
		// но NaN как ключ считается равным другому NaN

		// в обычном объекте это было бы одно и то же,
		// map сохраняет тип ключа
		console.log( map.get(1)   ); // 'num1'
		console.log( map.get('1') ); // 'str1'

		console.log( map.size ); // 3

		console.log(map.set(3, 3))
	}

	{
		// Инициализация тремя значениями
		// Аргументом new Map должен быть итерируемый объект (не обязательно именно массив).
		const map = new Map([
		  ['1',  'str1'],
		  [1,    'num1'],
		  [true, 'bool1']
		]);

		
		for(const val of map.values()){
			console.log("for values of map: "+val)
		}

		// по умолчанию вызовется map.entries();
		for(const entry of map){
			console.log("for entries of map: "+entry)
		}

		map.forEach( (value, key, map) => console.log(`map.forEach: key=${key} val=${value} map=${map}`) );



		let set = new Set(["апельсины", "яблоки", "бананы"]);

		set.forEach( (val, valueAgain, set) => 
			console.log(`set forEach: val=${val} valAgain=${valueAgain} set=${set}`) 
		);

	}
	


	() => {
		let map;

		// обычный конструктор
		map = new Map();

		// конструктор, принмающий что-то итерируемое
		map = new Map([
		  ['1',  'str1'],
		  [1,    'num1'],
		  [true, 'bool1']
		]);



		// возвращается map для чейна
		map = map.set(key, value);

		// возврат значения по ключу, иначе undefined
		let value = map.get(key);

		// возврат размера мапы
		let size = map.size;

		// удалить значение по ключу, возвращает true, если запись была, иначе false
		let wasDeleted = map.delete(key);

		// удалить все записи
		map.clear();

		// возвращает true, если ключ есть, иначе false
		let hasKey = map.has(key);
		

		// возвращает итерируемый объект ключей
		let keysMapIterator = map.keys();

		// возвращает итерируемый объект значений
		let valuesMapIterator = map.values();

		// возвращает итерируемый объект для записей [ключ, значение]
		// по умолчанию вызывается у мапы, если кинуть её в for..of
		let entriesMapIterator = map.entries();
	};
		
	
	() => {
		// обычный конструктор
		let set = new Set();

		// конструктор, принмающий что-то итерируемое
		set = new Set(["апельсины", "яблоки", "бананы"]);


		// добавляет в коллекцию item, возвращает set (чейнится).
		set = set.add(item);

		// удаляет item из коллекции, возвращает true, если он там был, иначе false.
		let wasDeleted = set.delete(item);

		// возвращает true, если item есть в коллекции, иначе false.
		let hasItem = set.has(item);

		// очищает set.
		set.clear();


		// for of
		for(const item of set){ console.log(`set for of: item=${item}`) }

		// forEach
		set.forEach( (val, valueAgain, set) => 
			console.log(`set forEach: val=${val} valAgain=${valueAgain} set=${set}`) 
		);
	}



	console.log("----------------------------------------------------------");
}
