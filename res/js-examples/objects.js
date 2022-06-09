

function objectsTest(){

	console.log("-----------------------------------------------OBJECTS");

	// Object from Map
	{
		const entries = new Map([
			["id", 8],
			["name", "some object"]
		])
		const obj = Object.fromEntries(entries)
		console.log("Object from entries:",obj) // Object from entries: {id: 8, name: 'some object'}
	}

	// Динамическое добавление/удаление свойств
	{
		console.log("Динамическое добавление/удаление свойств:")

		let obj = {}
		obj.a = 5
		obj["b"] = "bb"
		obj.c = true

		console.log(obj)

		delete obj.c

		console.log(obj)
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


	// spread operator - можно раскукожить объект или что-то итерируемое, например массив
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
			favoriteMusicArtists: ["Skillet", "Scarlxord", "Dead by April"],
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






	// for..in
	// for..in покажет только обычные свойства объекта
	// (без прототипа, символов)
	{
		let obj = {
			id: 78,
			param: "asd"
		}

		console.log(obj)
		console.log("for..in obj:")
		for (let key in obj){
			console.log(`${key}: ${obj[key]}`)
		}
		console.log("end of for..in")
	}






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