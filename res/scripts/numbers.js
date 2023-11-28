


// All numbers in JavaScript stored as 64 bits floating point numbers !!!


const mod = (a,b) => {
	if (a>=0 && b>=0 || a<0 && b<0) return Math.floor(a/b)
	else return Math.ceil(a/b)
}

function numbers(){

	console.log("----------------------------------------------NUMBERS");


	console.log("1.0+2.5+2.5:");
	console.log(1.0+2.5+2.5); // => 6 => не 6.0
	console.log("1+5:");
	console.log(1+5); // => 6
	
	
	console.log("1e-3",1e-3) // exponential
	console.log('0xff5588',0xff5588) // hex
	console.log('0o76543210',0o76543210) // oct
	console.log('0b110011',0b110011) // bin
	
	
	
	// Округление:
	// floor - округление в меньшую сторону (в сторону -∞)
	console.log('Math.floor(3.8)',Math.floor(3.8)) // 3
	console.log('Math.floor(-3.8)',Math.floor(-3.8)) // -4
	// ceil - округление в большую сторону (в сторону +∞)
	console.log('Math.ceil(3.8)',Math.ceil(3.8)) // 4
	console.log('Math.ceil(-3.8)',Math.ceil(-3.8)) // -3
	// round - округление до ближайшего целого (x.5 => x+1; -x.5 => -x+1)
	// начиная с .5 в сторону +∞
	console.log('Math.round(3.1)', Math.round(3.1)) // 3
	console.log('Math.round(3.6)', Math.round(3.6)) // 4
	console.log('Math.round(-3.1)', Math.round(-3.1)) // -3
	console.log('Math.round(-3.6)', Math.round(-3.6)) // -4
	console.log('Math.round(3.5)', Math.round(3.5)) // 4
	console.log('Math.round(-3.5)', Math.round(-3.5)) // -3
	// trunc - отбрасывание дробной части
	console.log('Math.trunc(3.1)', Math.trunc(3.1)) // 3
	console.log('Math.trunc(3.6)', Math.trunc(3.6)) // 3
	console.log('Math.trunc(-3.1)', Math.trunc(-3.1)) // -3
	console.log('Math.trunc(-3.6)', Math.trunc(-3.6)) // -3
	console.log('Math.trunc(3.5)', Math.trunc(3.5)) // 3
	console.log('Math.trunc(-3.5)', Math.trunc(-3.5)) // -3
	

	// toFixed(number) - округление half-up в строку с добавлением недостающих нулей
	console.log('3.31.toFixed(1)', 3.31.toFixed(1)) // 3.3
	console.log('3.36.toFixed(1)', 3.36.toFixed(1)) // 3.4
	console.log('(-3.31).toFixed(1)', (-3.31).toFixed(1)) // -3.3
	console.log('(-3.36).toFixed(1)', (-3.36).toFixed(1)) // -3.4
	console.log('3.35.toFixed(1)', 3.35.toFixed(1)) // 3.4
	console.log('(-3.35).toFixed(1)', (-3.35).toFixed(1)) // -3.4
	console.log('3.35.toFixed(3)', 3.35.toFixed(3)) // 3.350
	console.log('(-3.35).toFixed(3)', (-3.35).toFixed(3)) // -3.350
	console.log( '6.35.toFixed(20)', 6.35.toFixed(20) ) // 6.34999999999999964473
	console.log( '6.35.toFixed(1)', 6.35.toFixed(1) ) // !!!! 6.3, потому что 6.34999999999999964473
	
	
	console.log('0.1 + 0.2', 0.1 + 0.2) // 0.30000000000000004 (!!!!!! потеря точности)
	
	console.log("+''", +'') // пустая строка - это 0
	console.log('isFinite(5)', isFinite(5)) // true
	console.log('isFinite(-Infinity)', isFinite(-Infinity)) // false
	console.log('isFinite(NaN)', isFinite(NaN)) // false
	console.log('isNaN(NaN)', isNaN(NaN)) // true
	console.log('NaN===NaN', NaN===NaN) // false
	console.log('isNaN(\'klsj\')', isNaN('klsj')) // true
	console.log('Number.isNaN(\'klsj\')', Number.isNaN('klsj')) // false
	console.log('Object.is(NaN, NaN)', Object.is(NaN, NaN)) // true
	console.log('Object.is(0, -0)', Object.is(0, -0)) // false
	console.log('0 === -0', 0 === -0) // true
	// isNaN & isFinite сначала преобразуют к числу, а потом проверяют
	// Number.isNaN & Number.isFinite сначала проверяют чтобы это было число, а потом проверяют значение
	
	
	// удаляют пробелы в начале и читают число до ошибки парсинга с указанной системой счисления
	// parseInt(string, radix[2,36]?)
	console.log( 'parseInt(\'100px\')', parseInt('100px') ) // 100
	console.log( 'parseFloat(\'12.5em\')', parseFloat('12.5em') ) // 12.5
	console.log( 'parseFloat(\'  12.5em\')', parseFloat('  12.5em') ) // 12.5
	
	console.log( 'parseInt(\'12.3\')', parseInt('12.3') ) // 12, вернётся только целая часть
	console.log( 'parseFloat(\'12.3.4\')', parseFloat('12.3.4') ) // 12.3, произойдёт остановка чтения на второй точке
	
	console.log( 'parseInt(\'0xff\', 16)', parseInt('0xff', 16) ) // 255
	console.log( 'parseInt(\'ff\', 16)', parseInt('ff', 16) ) // 255, без 0x тоже работает
	
	console.log( 'parseInt(\'2n9c\', 36)', parseInt('2n9c', 36) ) // 123456
	
	// + & Number() тримят строку перед парсингом
	console.log( "Number('  12  ')", Number('  12  ')) // 12
	console.log( "+'  12  '", +'  12  ') // 12
	
	
	// Math.random() генерирует рандомное число в интервале [0; 1)
	console.log('Math.random()', Math.random())
	
	
	
	// toString()
	// toString(radix)
	console.log("29..toString(16):");
	console.log( 29..toString(16) ); // => 1d

	console.log("Number(29.55).toString(16):");
	console.log( Number(29.55).toString(16) ); // => 1d.8ccccccccccd

	console.log("2^32 = 4294967296 = 1 00000000 00000000 00000000 00000000:");
	console.log( 4294967296 ); // => 0
	console.log( "bin: " + (4294967296).toString(2) ) // => bin: 100000000000000000000000000000000

	console.log("-2^32 = -4294967296 = -1 00000000 00000000 00000000 00000000:");
	console.log( -4294967296 ); // => 0
	console.log( "bin: " + (-4294967296).toString(2) ) // => bin: -100000000000000000000000000000000

	// toLocaleString
	// can display without exponential notation
	console.log(
		0.00000000000000000000000000000000000000000000001
			.toLocaleString(['fullwide', 'en-Us'], { useGrouping: false, maximumSignificantDigits: 21 })
	) // "0.00000000000000000000000000000000000000000000001"

	




	// Побитовый сдвиг влево.

	// У сдвига меньший приоритет, чем у +, но больший чем у |.

	// С самого права в число вдвигаются 0, остальные биты просто сдвигаются влево, левй бит пропадает.

	// Целые числа представляются как знаковый int32, включая представление в дополнительном коде для отрицательных:
	// Берётся целое число, его модуль переводится в binary code (остаются только младшие 32 бита), 
	// потом если был минус, то эти 32 бита переводятся в доп код (инверсия всех 32 битов, затем+1).
	// Если число дробное, то сначала дробная часть просто откидывается


	// если количество сдвига больше длины int32, то x<<n => x<<(n%32)

	console.log("(16 = 00000000 00000000 00000000 00010000)<<1:");
	console.log( 16<<1 ); // => 32
	console.log( "bin: " + (16<<1).toString(2) )

	console.log("(-16 => доп код 11111111 11111111 11111111 11110000)<<1:");
	console.log( -16<<1 ); // => -32

	console.log("2^31-1 = 2147483647 = 01111111 11111111 11111111 11111111:");
	console.log( 2147483647 ); // => 2147483647
	console.log( "bin: " + (2147483647).toString(2) )

	console.log("(2^31-1 = 2147483647 = 01111111 11111111 11111111 111111110)<<1:");
	console.log( 2147483647<<1 ); // => -2

	console.log("(2^31 = 2147483648 = 10000000 00000000 00000000 00000000)<<1:");
	console.log( 2147483648<<1 ); // => 0
	console.log( "bin: " + (2147483648<<1).toString(2) )

	console.log("(2^31+1 = 2147483649 = 10000000 00000000 00000000 0000001)<<1:");
	console.log( 2147483649<<1 ); // => 2
	console.log( "bin: " + (2147483649<<1).toString(2) )

	console.log("(2^32 = 4294967296 = 1 00000000 00000000 00000000 00000000)<<1:");
	console.log( 4294967296<<1 ); // => 0
	console.log( "bin: " + (4294967296<<1).toString(2) ) // => bin: 0



	console.log("(2^34-1 = 17179869183 = 11 11111111 11111111 11111111 11111111)<<0:");
	console.log( 17179869183<<0 ); // => -1

	console.log("(-2^34-1 = -17179869183 = -11 11111111 11111111 11111111 11111111)<<0:");
	console.log( -17179869183<<0 ); // => 1

	console.log("(-2^34-1 = -17179869183 = -11 11111111 11111111 11111111 11111110)<<0:");
	console.log( -17179869182<<0 ); // => 2



	console.log("4<<32");
	console.log(4<<32) // 6

	console.log("(2^30+1 = 1073741825 = 01000000 00000000 00000000 00000001)<<33:");
	console.log( 1073741825<<1 ); // => -2147483646



	console.log("4.25<<0");
	console.log(4.25<<0) // 4

	console.log("4.99<<0");
	console.log(4.99<<0) // 4

	console.log("-4.99<<1");
	console.log(-4.99<<1) // -8

	console.log("4.25<<1");
	console.log(4.25<<1) // 8

	console.log("(2^31 = 2147483648 = 10000000 00000000 00000000 00000000)<<0:");
	console.log( 2147483648<<0 ); // => -2147483648





	console.log("-----------------------------------------------------");

}