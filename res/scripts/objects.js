

function objectsTest(){

	console.log("-----------------------------------------------OBJECTS");

	// getter & setter
	// Object.defineProperty / Object.defineProperties
	// There are two type of properties:
	// ● data props - contains a value
	// ● accessor props - contains getter / setter functions (can't store a value)
	{
		console.log('------getter & setter------')
		const obj = {
			_id: 9,
			get id(){ return -this._id }, // without backing field _id there will be endless recursion
			set id(newVal){ this._id = newVal*10 },

			name: 'some name',
		}

		console.log('set id = ', obj.id = 8) //8
		console.log('get id', obj.id) // -80
		console.log('set id = ', obj.id = 25); // 25
		console.log('get id', obj.id) // -250

		Object.defineProperty(obj, 'name2', {
			get(){ return this.name+' by custom getter' },
			set(newVal) { this.name = newVal+' by custom setter' }
		})
		Object.defineProperties(obj, {
			_name3: {
				value: 'third name',
			},
			name3: {
				get(){ return this._name3+' by custom getter' },
				set(newVal) { this._name3 = newVal+' by custom setter' }
			}
		})

		console.log('set name2 = ', obj.name2 = 'new name 2') // new name 2
		console.log('obj.name2:', obj.name2) // new name 2 by custom setter by custom getter
		console.log('obj.name3 from initial value:', obj.name3) // third name by custom getter
		console.log('set name3 = ', obj.name3 = 'new name 3') // new name 3
		console.log('obj.name3:', obj.name3) // third name by custom getter

		console.log('obj:', obj)

		const idSetter = Object.getOwnPropertyDescriptor(obj, 'id').set
		console.log('idSetter:', idSetter) // function id(newVal)
		console.log('idSetter.call(obj,10):', idSetter.call(obj,10)) // it works normally
		console.log(obj._id) // 100
		console.log('idSetter.bind(obj)(20):', idSetter.bind(obj)(20)) // it works normally
		console.log(obj._id) // 200

		const _idSetter = Object.getOwnPropertyDescriptor(obj, '_id').set
		console.log('_idSetter:', _idSetter) // undefined



		console.log('-----------------------------')
	}
	{
		let obj = { prop: 'p' }
		// Object.hasOwn() is intended as a replacement for Object.prototype.hasOwnProperty()
		Object.hasOwn(obj, 'prop') // returns boolean
	}

	// Object from Map
	{
		const entries = new Map([
			["id", 8],
			["name", "some object"]
		])
		const obj = Object.fromEntries(entries)
		console.log("Object from entries:",obj) // Object from entries: {id: 8, name: 'some object'}
	}

	// Имя свойства объекта из переменных
	{
		const propName = 'id'
		const obj = {
			[propName]: 1
		}
		const id = obj[propName]
	}

	// Динамическое добавление/удаление свойств
	// Проверка наличия свойства
	{
		console.log("Динамическое добавление/удаление свойств, проверка наличия свойства:")

		let obj = {}
		obj.a = 5
		obj["b"] = "bb"
		obj.c = true

		console.log(`let obj = {}; obj.a = 5; obj["b"] = "bb"; obj.c = true; obj: `, obj)

		// delete property
		delete obj.c

		console.log(`delete obj.c; obj:`,obj)

		// Проверка наличия собственных свойств объекта (не включая унаследованные свойства прототипов)
		console.log('-----<obj>.hasOwnProperty(<propName>)-----')
		console.log(`obj.hasOwnProperty('a'):`,obj.hasOwnProperty('a'))
		console.log(`obj.hasOwnProperty('toString'):`,obj.hasOwnProperty('toString'))

		// Проверка наличия свойств объекта (включая унаследованные)
		console.log('-----in operator-----')
		console.log(`'a' in obj:`,'a' in obj)
		console.log(`'toString' in obj:`,'toString' in obj)
	}


	// У объекта все свойства - строки
	{
		let obj = {"0": 1, "00":2 , x: 3, true: 4, undefined: 5}
		console.log(obj)

		console.log(obj[0]) // => 1
		console.log(obj["0"]) // => 1

		console.log(obj["00"]) // => 2

		console.log(obj[true]) // => 4
		console.log(obj["true"]) // => 4

		console.log(obj[undefined]) // => 5
		console.log(obj["undefined"]) // => 5

		obj = [1]
		obj["00"] = 2 // длина массива не увеличилась
		obj[1] = 3 // длина массива увеличилась
		obj["2"] = 4 // длина массива увеличилась (считается как индекс 2)
		obj[3.5] = 5 // длина массива не увеличилась, видимо он воспринимает только целые числа как индексы (и строковые представления целых чисел)
		console.log(obj)
		console.log(obj[0]) // => 1
		console.log(obj["0"]) // => 1
		console.log(obj["00"]) // => 2
	}


	// spread operator - деструктуризация - можно раскукожить объект или что-то итерируемое, например массив
	{
		let obj = {
			id: 1,
			items: ["box", "cup", "screw"],
			thing: {
				number: 2,
				name: "ball",
			},
			location: {
				country: "USA",
				city: "Silicon Valley",
			}
		}

		let items = [...obj.items]; // перекопировали в НОВЫЙ массив
		items = [...obj.items, "black hole"]; // перекопировали в НОВЫЙ массив + добавили элемент в конец
		console.log(items);

		let obj2 = {...obj}; // раскукожили объект (shallow copy) - поверхностно скопировали объект
		obj2 = {...obj, isActivated: true, id: 2} // скопировали объект + добавили новое свойство + изменили имееющееся
		console.log(obj2);

		/*let {thing, items, ...obj} = obj;
		console.log(thing);
		console.log(items);
		console.log(obj);*/
	}



	// ОБЪЕКТ -> ПЕРЕМЕННЫЕ
	{
		let userData = {
			id: 7,
			login: "Andrew",
			email: "andrew@mail.ru",
			description: "I am superman",
			favoriteMusicArtists: ["Skillet", "Scarlxrd", "Dead by April"],
			location: {
				country: "Russia",
				city: "Irkutsk",
			}
		}

		{
			// выбираем нужные свойства объекта в отдельные переменные
			// порядок - не важен
			// ИМЯ должно СОВПАДАТЬ, иначе undefined
			// или можно переименовать через <оригинальное имя>:<новое имя>
			let {id, login, email: theEmail, location} = userData;
			// НЕЛЬЗЯ:
			//	location.country
			//	country: location.country
			//	favoriteMusicArtists[0]
			//	artist: favoriteMusicArtists[0]

			// -> User data is: id=7 email=andrew@mail.ru login=Andrew city=Irkutsk
			console.log(`User data is: id=${id} email=${theEmail} login=${login} city=${location.city}`);


			/*
				создание переменных:
				theLocation - это userData.location (location переименован в theLocation)
				country - это userData.location.country (country не переименовывался)
				town - это userData.location.city (city переименован в town)
			 */
			let {location: theLocation, location: {country, city: town}} = userData

			// -> User data is: location={"country":"Russia","city":"Irkutsk"} country=Russia city=Irkutsk
			console.log(`User data is: location=${JSON.stringify(theLocation)} country=${country} city=${town}`);
		}
		{
			// в rest попадут все те поля, которые мы явно не забрали в переменные
			// т.е. description и favoriteMusicArtists
			// и Rest element must be last element
			let {id, login, email, location, ...rest} = userData;
			console.log(`User data is: id=${id} email=${email} login=${login} city=${location.city}`);
			console.log(rest);
		}
		{
			let obj = {
				name: "object",
				// взять значение поля из userData и присвоить как имя поля сюда
				// будет Russia: "USA"
				[userData.location.country]: "USA",
			}
			console.log(obj)
		}
		
	}




	// При перечислении свойств через for..in и тд порядок итерации соответствует порядку добавления полей в объект!!!

	// for..in
	// for..in покажет только обычные свойства объекта (own, enumerable, with prototype chain)
	{
		let obj = {
			id: 78,
			param: "asd",
			name: undefined,
		}

		console.log(obj)
		console.log("-----for..in-----")
		console.log("for..in obj:")
		for (let key in obj){
			//console.log(`${key}: ${obj[key]}`)
			console.log(`key=${key} value=${obj[key]}`)
		}
		console.log("end of for..in")
	}




	// for..in
	// for(const key in object){ object[key] = 'new value' }
	// (with prototypes, enumerable, no symbol keys)


	// Object.keys(someObject) => keys[]
	// все ключи объекта
	// (own, enumerable, no symbol keys)

	// Object.values(someObject) => values[]
	// все значения объекта
	// (own, enumerable, no symbol keys)

	// Object.entries(someObject) => [name, value][]
	// все записи ([ключ: значение]) объекта
	// (own, enumerable, no symbol keys)



	// короткое именование
	// a: a  ->  a
	{
		let a = 5;
		let obj = {
			id: 6,
			a,	// аналогично a: a
			name: "objjj",
			"property": 23, // можно писать имя свойства как строку
		}
		// обращение к свойству объекта через [] - можно так же изменять и создавать новые свойсвта
		// но индекс - строка (обязательно в кавычках), число или какой-то другой объект...
		obj["prop2"] = 56;
		obj[10] = 60;
		console.log("obj.id = obj[\"id\"]: " + obj["id"]);
		console.log(obj)
	}





	// один объект, на который ссылаются 2 переменные
	{
		let a = {
			id: 1,
			items: ["box", "cup", "screw"],
			thing: {
				number: 2,
				name: "ball",
			},
		};
		let b = a;
		b.id = 2;
		b.items.push("door");
		b.thing.number = 10;
		console.log(a);

		console.log("a.id = a[\"id\"]: " + a["id"]);
	}

	// 2 объекта, но скопирован поверхностно (не копируются вложенные объекты) (shallow copy)
	{
		let a = {
			id: 1,
			items: ["box", "cup", "screw"],
			thing: {
				number: 2,
				name: "ball",
			},
		};

		
		let b = {...a}; // вложенные объекты остались общими, напрмер массив items - просто скопировалась ссылка
		b.id = 2;
		b.items.push("door");
		b.thing.number = 10;
		console.log(a);
	}

	// 2 объекта, скопированы полностью (deep copy)
	{
		let a = {
			id: 1,
			items: ["box", "cup", "screw"],
			thing: {
				number: 2,
				name: "ball",
			},
		};

		
		let b = {...a}; // вложенные объекты остались общими, напрмер массив items - просто скопировалась ссылка
		console.log("b === a: " + (b === a));
		console.log("b == a: " + (b == a));
		b.items = [...b.items]; // копирование массива
		b.thing = {...b.thing}; // копирование вложенного объекта thing
		b.id = 2;
		b.items.push("door");
		b.thing.number = 10;
		console.log(a);
	}

	// КОРОТКИЙ deep copy
	{
		let a = {
			id: 1,
			items: ["box", "cup", "screw"],
			thing: {
				number: 2,
				name: "ball",
			},
		};

		// порядок имеет значение!!!
		let b = {
			...a, // скопировать всё из а поверхностно
			items: [...a.items, "light bulb"], // теперь перезаписать поверхностную копию items полной копией + добавление нового элемента в конец
			things: {...a.things}, // перезаписать things полной копией
		};

		console.log(b);
	}




	console.log("----------------------------------------------------");
}