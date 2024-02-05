

{
    // OLD SCHOOL CLASSES

    function _Thing() {}
    // _Thing.prototype is {} by default
    console.log(
      'Object.getPrototypeOf(_Thing.prototype) === Object.prototype',
      Object.getPrototypeOf(_Thing.prototype) === Object.prototype // true
    );
    // _Thing.prototype.constructor is _Thing by default
    console.log(
      '_Thing.prototype.constructor === _Thing',
      _Thing.prototype.constructor === _Thing // true
    );

    
    
    function _Person(name, age, from) {
        this.name = name;
        this.age = age;
        this.from = from;
    }

    // The Object.create() method creates a new object,
    // using an existing object as the prototype of the newly created object.
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
    console.log(
      _p, // _Person { name: 'rafael cepeda', age: 23, from: 1 }
      _p instanceof _Person, // true
      _p instanceof _Thing, // true
    );
}



{
    // NEW SCHOOL CLASSES

    class Thing {}

    class Person extends Thing {
        constructor(name, age, from) {
            super()
            this.name = name
            this.age = age
            this.from = from
        }

        makeOlder() {
            this.age++
        }

        toString() {
            return this.name
        }

        static get FLORIDA() { return 1 }
        static get NEW_YORK() { return 2 }
    }

    const p = new Person('rafael cepeda', 23, Person.FLORIDA)
    console.log(
      p, // Person { name: 'rafael cepeda', age: 23, from: 1 }
      p instanceof Person, // true
      p instanceof Thing, // true
    )
}
