

function RegExpTest() {

	{
		const regexp = /^\w*$/
	}

	// RegExp = Regular Expression
	// const regExpSyntax = /<regExp>/<flags>
	
	/*
		JavaScript RegExp objects are stateful when they have the global or sticky flags set (e.g., /foo/g or /foo/y).
		They store a lastIndex from the previous match. Using this internally,
		test(), exec() and string match() etc. can be used to iterate over multiple matches in a string of text (with capture groups).
	*/
	
	// MATCH
	{
		const str = "For more info, see Chapter 3.4.5.1"
		// flag i => ignore case
		const regExp = /see (chapter \d+(?<groupName>\.\d)*)/i
		const found = str.match(regExp)
		console.log(found)
		/*
			!!! Regex must NOT have 'g' flag to return this result
			
			will return:

			[
				"see Chapter 3.4.5.1", "Chapter 3.4.5.1", ".1",
				index: 15,
				input: "For more info, see Chapter 3.4.5.1",
				groups: {groupName: '.1'}
			]

			=>

			0: "see Chapter 3.4.5.1"
			1: "Chapter 3.4.5.1"
			2: ".1"
			groups: {groupName: '.1'}
			index: 15
			input: "For more info, see Chapter 3.4.5.1"
			length: 3
			__proto__: Array(0)

			=>

			arr[0] => "see Chapter 3.4.5.1" => is whole match
			arr[1] => "Chapter 3.4.5.1" => was captured by '(chapter \d+(\.\d)*)' group
			arr[2] => ".1" => was the last value captured by '(\.\d)' group
			arr["groups"] => {groupName: '.1'} => объект именованных групп и сами обнаруженные группы
													(если группа нашлась несколько раз, как здесь, то сохраняется последнее совпадение)
			arr["index"] => 15 => start match idx
			arr["input"] => "For more info, see Chapter 3.4.5.1" => original input string
			arr["length"] => 3 => len of numeric indexes of array
		*/
		console.log("start match idx:")
		console.log(found["index"]) // => 15
	}
	{
		const str = "For more info, see Chapter"
		// flag i => ignore case
		const regExp = /see (chapter \d+(\.\d)*)/i
		const found = str.match(regExp)
		console.log(found) // => null because no match found
	}


	{
		console.log('"aaabacaa".match(/a[abc]/g):')
		console.log("aaabacaa".match(/a[abc]/g)) // => ['aa', 'ab', 'ac', 'aa']
		// если указан флаг g, то возвращается просто массив найденных совпадений
	}
	{
		console.log('"2".match(/a[abc]/g):')
		console.log("2".match(/a[abc]/g)) // => null
	}


	// MATCH ALL
	{
		"placeSubType0a".matchAll(/(\p{Lu})|(\d+)/gu).forEach(it => console.log(it))
		/*
		Array of matches:
		['S', 'S', undefined, index: 5, input: 'placeSubType0a', groups: undefined]
		['T', 'T', undefined, index: 8, input: 'placeSubType0a', groups: undefined]
		['0', undefined, '0', index: 12, input: 'placeSubType0a', groups: undefined]
		*/
	}
	
	
	// todo regexp methods



	// TODO examine in:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
	// https://tuhub.ru/frontend/js-regexp


	{
		// check if matches only

		console.log("check if matches only:")

		console.log("/\d/.test(123):")
		console.log(/\d/.test("123"))

		console.log("/\d/.test(1f23):")
		console.log(/\d/.test("1f23"))

		console.log("/^\d$/.test(1f23):")
		console.log(/^\d$/.test("1f23"))

	}
	
	{
		// '$&' - заменяется на найденную подстроку
		'1d6g66'.replace(/\d/g, "-$&") // => '-1d-6g-6-6'
	}
	{
		// str.replace with replacer function
		function replacer(match, p1, p2, p3, offset, string) {
			// p1 is non-digits, p2 digits, and p3 non-alphanumerics
			return [p1, p2, p3].join(" - ");
		}
		const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
		console.log(newString); // abc - 12345 - #$*%
	}

}