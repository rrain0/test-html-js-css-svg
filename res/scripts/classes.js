

function classes(){
  
  
  console.log("-------------------------CLASSES")
  
  class Man {
    // constructor (class) members
    static isHuman = true
    static getIsHuman(){ return Man.isHuman }
    
    // конструктор - может быть ТОЛЬКО ОДИН
    constructor(name, age){
      this.name = name
      this.age = age
    }
    
    // instance members
    // переменные - для каждого нового объекта создаются новые значения переменных
    male = true
    // функция в переменной.
    // this - текущий инстанс объекта - сохраняется из окружения в момент создания функции.
    // this стрелочной функции является частью scope, а не функции, и не может быть изменён.
    isOlderThan = age => this.age > age
    
    // prototype members
    // методы - хранятся в единственном экземпляре в прототипе
    toString(){
      return `I am ${this.name} and I am ${this.age}`
    }
    toConsole(){ console.log(this.toString()) }
  }
  
  
  {
    // Every object has prototype
    
    // ● Get prototype of instance: Object.getPrototypeOf(<object>)
    const objInstanceProto = Object.getPrototypeOf({})
    // ● Get Prototype of class: Object.prototype
    const objClassProto = Object.prototype
    
    console.log(
      'objInstanceProto === objClassProto',
      objInstanceProto === objClassProto // true
    )
    console.log(
      'Object.getPrototypeOf({}) === Object.prototype',
      Object.getPrototypeOf({}) === Object.prototype // true
    )
    console.log(
      'Object.prototype.constructor === Object',
      Object.prototype.constructor === Object // true
    )
    console.log(
      'Object.prototype.constructor.prototype === Object.prototype',
      Object.prototype.constructor.prototype === Object.prototype // true
    )
    console.log(
      'Object.getPrototypeOf(Object.prototype)',
      Object.getPrototypeOf(Object.prototype) // null
    )
    console.log(
      'Object.getPrototypeOf(Object)',
      Object.getPrototypeOf(Object) // ƒ () { [native code] }
    )
    
    
    // Prototype has a constructor (class).
    // ● Get constructor from prototype: <proto>.constructor
    // ● Get constructor from instance: Object.getPrototypeOf(<object>).constructor
    // ● Get constructor from instance shortcut: <object>.constructor is Object.getPrototypeOf(<object>).constructor
    console.log(
      '({}).constructor === Object.getPrototypeOf({}).constructor',
      ({}).constructor === Object.getPrototypeOf({}).constructor // true
    )
  }
  
  
  
  
  let manFromMan = new Man("Sasha", 19) // создание объекта
  manFromMan.male = false
  
  let manFromObject = { name: "Sasha", age: 19, male: false }
  
  console.log(manFromMan)
  console.log(manFromObject)
  
  
  
  console.log("------------")
  
  
  
  let man1 = new Man("Dima", 31)
  console.log(man1)
  man1.toConsole() // вызов метода объекта
  console.log(
    'man1.isOlderThan(20)',
    man1.isOlderThan(20) // true
  )
  console.log(
    'man1.isOlderThan(40)',
    man1.isOlderThan(40) // false
  )
  console.log(
    'man1.isOlderThan(50)',
    man1.isOlderThan(50) // false
  )
  
  console.log(
    'man1.age = 45',
    man1.age = 45
  )
  console.log(
    'man1.isOlderThan(20)',
    man1.isOlderThan(20) // true
  )
  console.log(
    'man1.isOlderThan(40)',
    man1.isOlderThan(40) // true
  )
  console.log(
    'man1.isOlderThan(50)',
    man1.isOlderThan(50) // false
  )
  
  
  
  
  console.log("------------");
  
  
  
  //наследование
  class Woman extends Man {
    
    //если не пишем конструктор, то автоматически идёт прокидывание в конструктор суперкласса
    constructor(name, age){
      super(name, age) //обязательный вызов конструктора суперкласса
      this.male = false
    }
    
    //переопределение метода
    toString(){
      return `I am Woman and my name is ${this.name} and I am ${this.age}`;
    }
  }
  
  let sasha = new Woman("Sasha", 19)
  console.log(sasha.toString()) //вызов переопределённого метода
  sasha.toConsole() //вызов метода суперкласса
  
  
  
  console.log("-------------------------CLASSES END");
  
  
}