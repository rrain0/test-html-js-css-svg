

{
    // OLD SCHOOL CLASSES

    function _Thing() {}

    function _Person(name, age, from) {
        this.name = name;
        this.age = age;
        this.from = from;
    }

    _Person.prototype = Object.create(_Thing.prototype);
    _Person.prototype.constructor = _Person; // so easy to mess this up!

    _Person.prototype.makeOlder = function () {
        this.age++;
    };
    _Person.prototype.toString = function () {
        return this.name;
    };
    _Person.FLORIDA = 1;
    _Person.NEW_YORK = 2;


    var _p = new _Person('rafael cepeda', 23, _Person.FLORIDA);
    console.log(_p, _p instanceof _Person, _p instanceof _Thing); // _Person { name: 'rafael cepeda', age: 23, from: 1 } true true
}
{
    // NEW SCHOOL CLASSES

    class Thing {}

    class Person extends Thing {
        constructor(name, age, from) {
            super();
            this.name = name;
            this.age = age;
            this.from = from;
        }

        makeOlder() {
            this.age++;
        }

        toString() {
            return this.name;
        }

        static get FLORIDA() { return 1; }
        static get NEW_YORK() { return 2; }
    }

    var p = new Person('rafael cepeda', 23, Person.FLORIDA);
    console.log(p, p instanceof Person, p instanceof Thing); // Person { name: 'rafael cepeda', age: 23, from: 1 } true true
}
