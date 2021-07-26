
function JSONTest() {
	const stringFromObject = JSON.stringify({id: 1, param: "asd"})
	console.log("stringFromObject:")
	console.log(stringFromObject)

	const objFromString = JSON.parse('{"id":"2", "param":"as"}')
	console.log("objFromString:")
	console.log(objFromString)

}