

function RegExpTest() {

// RegExp = Regular Expression
// const regExpSyntax = /<regExp>/<flags>

	{
		const str = "For more info, see Chapter 3.4.5.1"
		// flag i => ignore case
		const regExp = /see (chapter \d+(?<groupName>\.\d)*)/i
		const found = str.match(regExp)
		console.log(found)
		/*
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


	// todo matchAll
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

}