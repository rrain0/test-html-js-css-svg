


// ES6 Generators

/*
  Генератор - это синтаксический сахар для лёгкого создания объектов-итераторов.

  Генератор это функция, выполнение которой можно "заморозить",
  потом выполнить другой код и потом вызвать разморозку и продролжение выполнения функции-генератора,
  но выполняется всё в одном потоке
 */
/*
  Pros of generators:
  ✅ Lazy evaluation - compute values only when needed.
  ✅ Data streaming - massive datasets without memory blowups.
  ✅ Complex sequences - retries, backoffs, workflows.
  ✅ Creating infinite sequences.
  ✅ Creating async sequences.
 */

async function jsGeneratorsTest() {
  
  {
    // Range generator
    function *range(start, end) {
      for (let i = start; i <= end; i++) {
        yield i
      }
    }
    
    for (const num of range(1, 5)) {
      // будут выведены числа 1..5
      console.log('number of range(1, 5):', num)
    }
  }
  
  {
    // Infinite generator
    function *counter() {
      for (let i = 0; ; i++) yield i
    }
    
    for (const num of counter()) {
      if (num > 3) break
      console.log('number of counter:', num)
    }
  }
  
  {
    // Async generator
    async function *asyncDataFlow() {
      await new Promise(resolve => setTimeout(resolve, 500))
      yield 'data part 1'
      await new Promise(resolve => setTimeout(resolve, 1000))
      yield 'data part 2'
      await new Promise(resolve => setTimeout(resolve, 1000))
      yield 'data part 3'
    }
    
    for await (const part of asyncDataFlow()) {
      console.log('part of asyncDataFlow:', part)
    }
  }
  
  {
    console.log('GENERATOR 1:')
    
    function *createGenerator1() {
      console.log('GEN start')
      yield 1 // вернуть 1
      console.log('GEN middle')
      yield 'second'
      console.log('GEN end')
      return 3
    }
    
    let gen1 = createGenerator1() // получение экземпляра генератора
    console.log('#1')
    // запуск генератора + выполнение до первого yield + возвращение результата этого yield
    console.log(gen1.next()) // => {value: 1, done: false}
    console.log('#2')
    // продолжение выполнения генератора + выполнение до следующего yield + возвращение результата этого yield
    console.log(gen1.next()) // => {value: 'second', done: false}
    console.log('#3')
    // продолжение выполнения генератора + выполнение до конца функции
    console.log(gen1.next()) // => {value: 3, done: true}
    console.log('#4')
    // больше нет кода, который осталось выполнить
    console.log(gen1.next()) // => {value: undefined, done: true}
    console.log('#5')
    
    
    console.log('GENERATOR 1 in for..of:')
    gen1 = createGenerator1()
    for (const val of gen1) {
      console.log(val) // не вернёт значение из return, только через yield
    }
    
    
    console.log('GENERATOR 1 decomposition to array:')
    gen1 = createGenerator1()
    console.log([...gen1]) // without return
  }
  
  
  {
    console.log('SUM GENERATOR:')
    
    function *createSumGen() {
      yield 'start'
      const a = yield 'yield this and read value from next arg' // вернуть что-то и запросить значение
      const b = yield // запросить значение
      yield a + b
      return 'end'
    }
    
    const sumGen = createSumGen()
    console.log(sumGen.next())
    console.log(sumGen.next(10))
    console.log(sumGen.next(3))
    console.log(sumGen.next())
  }
  
  
  {
    console.log('Вложенные генераторы:')
    
    function *generateSequence(s, e) {
      for (let i = s; i <= e; i++) yield i
    }
    
    // специальный yield* делгирующий выполнение другому генератору
    // Получается – как будто мы вставили код внутреннего генератора во внешний напрямую
    function *generateAlphaNum() {
      // коды символов 0..9
      yield *generateSequence(48, 57)
      // коды символов A..Z
      yield *generateSequence(65, 90)
      // коды символов a..z
      yield *generateSequence(97, 122)
    }
    
    let str = ''
    for (let code of generateAlphaNum()) {
      str += String.fromCharCode(code)
    }
    console.log(str) // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
  }
  
  
  {
    console.log('Кидаем ошибки в генератор и из него:')
    
    function *gen() {
      try {
        let result = yield 'Сколько будет 2+2?'
      }
      catch (e) {
        console.log(e) // => Error: Ответ на этот вопрос не найден в моей базе данных
        throw new Error('АААААААА')
      }
    }
    
    let generator = gen()
    let question = generator.next().value
    try {
      generator.throw(new Error('Ответ на этот вопрос не найден в моей базе данных'))
    }
    catch (e) {
      console.log(e) // => Error: АААААААА
    }
  }
  
}
jsGeneratorsTest()
