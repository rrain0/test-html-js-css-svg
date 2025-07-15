

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
	
	
	// 🔶string.match(regex)
	// без g флага, находит только первое совпадение
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


	// 🔶string.matchAll(regex)
	// обязательно g флаг, находит все совпадения
	{
		// \p{Lu} - letter uppercase
		'placeSubType0a'.matchAll(/(\p{Lu})|(\d+)/gu).forEach(it => console.log(it))
		/*
		Array of matches:
		['S', 'S', undefined,
			index: 5, input: 'placeSubType0a', groups: undefined
		]
		['T', 'T', undefined,
			index: 8, input: 'placeSubType0a', groups: undefined
		]
		['0', undefined, '0',
			index: 12, input: 'placeSubType0a', groups: undefined
		]
		*/
	}
	{
		// \p{Lu} - letter uppercase
		'placeSubType0a'.matchAll(/(\p{Lu})|(?<digits>\d+)/gu).forEach(it => console.log(it))
		/*
		Array of matches:
		['S', 'S', undefined,
			index: 5, input: 'placeSubType0a', groups: { digits: undefined }
		]
		['T', 'T', undefined,
			index: 8, input: 'placeSubType0a', groups: { digits: undefined }
		]
		['0', undefined, '0',
			index: 12, input: 'placeSubType0a', groups: { digits: '0' }
		]
		*/
	}
	
	
	// todo regexp methods



	// TODO examine in:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
	// https://tuhub.ru/frontend/js-regexp


	{
		// CHECK MATCH ONLY

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
		function replacer(match, group1, group2, group3, offset, string) {
			// group1 is non-digits, group2 digits, and group3 non-alphanumerics
			// Returned string replaces original match
			return [group1, group2, group3].join(" - ")
		}
		const newString = "abc12345#$*%aaaaa".replace(/([^\d]*)(\d*)([^\w]*)/, replacer)
		console.log(newString) // abc - 12345 - #$*%aaaaa
		
		const capitalize = str => (
			str.replace(/^./, match => match.toUpperCase())
		)
		const uncapitalize = str => (
			str.replace(/^./, match => match.toLowerCase())
		)
		const camelCaseToKebabCase = str => (
			// '$&' - заменяется на найденную подстроку (найденный match)
			str.replace(/\p{Lu}|\d+/gu, '-$&').toLowerCase()
		)
		const kebabCaseToCamelCase = str => (
			str.replace(/-./g, match => match[1].toUpperCase())
		)
	}

}