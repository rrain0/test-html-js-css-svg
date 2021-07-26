
function RegExpTest() {

// RegExp = Regular Expression
// const regExp = /<regExp>/<flags>

	{
		const str = "For more info, see Chapter 3.4.5.1"
		// flag i => ignore case
		const regExp = /see (chapter \d+(\.\d)*)/i
		const found = str.match(regExp)
		console.log(found)
		/*
			will return:

			["see Chapter 3.4.5.1", "Chapter 3.4.5.1", 
			".1", 
			index: 15, 
			input: "For more info, see Chapter 3.4.5.1", 
			groups: undefined]

			=>

			0: "see Chapter 3.4.5.1"
			1: "Chapter 3.4.5.1"
			2: ".1"groups: undefined
			index: 15
			input: "For more info, see Chapter 3.4.5.1"
			length: 3
			__proto__: Array(0)

			=>

			arr[0] => "see Chapter 3.4.5.1" => is whole match
			arr[1] => "Chapter 3.4.5.1" => was captured by '(chapter \d+(\.\d)*)'
			arr[2] => ".1" => was the last value captured by '(\.\d)'
			arr[index] => 15 => start match idx
			arr[input] => "For more info, see Chapter 3.4.5.1" => original input string
			arr[length] => 3 => len of numeric indexes of array
		*/
		console.log("start match idx:")
		console.log(found["index"]) // => 15
	}


	// TODO examine in:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
	// https://tuhub.ru/frontend/js-regexp

}