


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
	{

		// '𝟘𝟙𝟚𝟛' - сложные двухбайтовые UTF-16 символы

		// BREAKS surrogate pairs (takes per byte)
		console.log("Character At: '𝟘𝟙𝟚𝟛'[1]:")
		console.log('𝟘𝟙𝟚𝟛'[1]) // => �

		// BREAKS surrogate pairs (takes per byte)
		console.log("Character At: '𝟘𝟙𝟚𝟛'.charAt(1):")
		console.log('𝟘𝟙𝟚𝟛'.charAt(1)) // => �


		// Char Code At:

		// BREAKS surrogate pairs (takes per byte)
		console.log("Char Code At: '𝟘𝟙𝟚𝟛'.charCodeAt(1):")
		console.log('𝟘𝟙𝟚𝟛'.charCodeAt(1)) // => 57304

		// BREAKS surrogate pairs (takes per byte)
		console.log("Char Code At: '𝟘𝟙𝟚𝟛'.at(1) [this can take negative idx]:")
		console.log('𝟘𝟙𝟚𝟛'.at(1))
		console.log("Char Code At: '789'.at(-3) [this can take negative idx]:")
		console.log("789".at(-3))

		// To Character Array:

		// BREAKS surrogate pairs (takes per byte)
		console.log("To Character Array: '𝟘𝟙𝟚𝟛'.split['']:")
		console.log('𝟘𝟙𝟚𝟛'.split('')) // => ['\uD835', '\uDFD8', '\uD835', '\uDFD9', '\uD835', '\uDFDA', '\uD835', '\uDFDB']

		// SAFE for surrogate pairs (takes per char)
		console.log("To Character Array: [...'𝟘𝟙𝟚𝟛']:")
		console.log([...'𝟘𝟙𝟚𝟛']) // => ['𝟘', '𝟙', '𝟚', '𝟛']

		// SAFE for surrogate pairs (takes per char)
		console.log("To Character Array: Array.from('𝟘𝟙𝟚𝟛'):")
		console.log(Array.from('𝟘𝟙𝟚𝟛')) // => ['𝟘', '𝟙', '𝟚', '𝟛']

		// SAFE for surrogate pairs (takes per char)
		// RegExp u flag
		// Use /(?=[\s\S])/u instead of /(?=.)/u because . does not match newlines
		console.log("To Character Array: '𝟘𝟙𝟚𝟛'.split(/(?=[\s\S])/u):")
		console.log('𝟘𝟙𝟚𝟛'.split(/(?=[\s\S])/u)) // => ['𝟘', '𝟙', '𝟚', '𝟛']

		// SAFE for surrogate pairs (takes per char)
		console.log("To Character Array: for(const char of '𝟘𝟙𝟚𝟛') array.push(char) :")
		let array = []
		for(const char of '𝟘𝟙𝟚𝟛') array.push(char)
		console.log(array)

		// BREAKS surrogate pairs (takes per byte)
		console.log("To Character Array: Object.assign([], '𝟘𝟙𝟚𝟛'):")
		console.log(Object.assign([], '𝟘𝟙𝟚𝟛'))

	}




	console.log("-----------------------------------------------------");
}
