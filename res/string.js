


function stringTest(){
	console.log("----------------------------------------------STRING");

	{
		let str = "Andrew";
		const str2 = "one"


		console.log(str + " is number " + str2); //обычная строка
		console.log(`${str} is number ${str2}`); //ШАБЛОННАЯ СТРОКА




		// slice(s) - получить подстроку из символов начиная с s и до конца строки
		// slice(s, e) - получить подстроку из символов начиная с s до e
		// s - inclusive, e - exclusive
		console.log(`"Andrew".slice(4):`);
		console.log("Andrew".slice(4));
		console.log(`"Andrew".slice(2,4):`);
		console.log("Andrew".slice(2,4));
		console.log(`"Andrew".slice(8):`);
		console.log("Andrew".slice(8)); // => "" => за границами строки возвращает пустую строку
		console.log(`"Andrew".slice(2,1):`);
		console.log("Andrew".slice(2,1)); // => "" => s >= e возвращает пустую строку
		// если индекс отрицательный => idx = string.length - idx
		console.log(`"Andrew".slice(4, -1):`);
		console.log("Andrew".slice(4, -1));
		console.log(`"Andrew".slice(-10, 10):`);
		console.log("Andrew".slice(-10, 10)); // => "Andrew" => если s-str.length<=0 => 0 и e>str.length => str.length
	}
	{
		let str = "kukU"
		console.log("includes: ")
		console.log(str.includes("k")) // => true
		console.log(str.includes("uku")) // => false
		console.log(str.includes("ukU")) // => true
	}




	console.log("-----------------------------------------------------");
}
