


console.log("-------------------------CLASSES");

class Man {

	//конструктор - может быть ТОЛЬКО ОДИН
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	//переменные
	male = true;
	isOlderThan = age => this.age > age; //функция в переменной

	//методы
	toString(){
		return `I am ${this.name} and I am ${this.age}`;
	}
	toConsole(){console.log(this.toString());}
}




let manFromMan = new Man("Sasha", 19); //создание объекта
manFromMan.male = false;

let manFromObject = {name: "Sasha", age: 19, male: false};

console.log(manFromMan);
console.log(manFromObject);



console.log("------------");



let m1 = new Man("Dima", 31);
console.log(m1);
m1.toConsole(); //вызов метода объекта
console.log(m1.isOlderThan(20));



console.log("------------");



//наследование
class Woman extends Man {

	//если не пишем конструктор, то автоматически идёт прокидывание в конструктор суперкласса
	constructor(name, age){
		super(name, age); //обязательный вызов конструктора суперкласса
		this.male = false;
	}

	//переопределение метода
	toString(){
		return `I am Woman and my name is ${this.name} and I am ${this.age}`;
	}
}

let sasha = new Woman("Sasha", 19);
console.log(sasha.toString()); //вызов переопределённого метода
sasha.toConsole(); //вызов метода суперкласса



console.log("-------------------------CLASSES END");