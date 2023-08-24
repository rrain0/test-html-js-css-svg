


function ObjectsClone(){
  
  /*export*/ function clone/*<T extends object>*/(
    orig/*: T*/,
    update/*?: { -readonly [Prop in keyof T]?: T[Prop] }*/
  )/*: T*/ {
    let newInstance = Object.assign(Object.create(Object.getPrototypeOf(orig)), orig)/* as T*/
    Object.assign(newInstance, update)
    return newInstance
  }
  
  class Some {
    static someConstant = 8 // constructor (class) member
    static getConstant(){ return Some.someConstant } // constructor (class) member
    
    a // instance member
    s // instance member
    constructor(a,s) {
      this.a = a
      this.s = s
    }
    getA(){ return this.a } // prototype member
  }
  const some = new Some(3,'kdjf')
  const some2 = clone(some, { s: 'jjj' })
  console.log(some2)
  console.log(some2.a)
  console.log(some2.s)
  console.log(some2.getA())
  
  // Every object has prototype
  //    Get prototype: Object.getPrototypeOf(<object>)
  
  // Prototype has a constructor (class).
  //    Get constructor: Object.getPrototypeOf(<object>).constructor
  //    Get constructor: <object>.constructor
  
  // <object>.constructor is Object.getPrototypeOf(<object>).constructor
  console.log(Object.getPrototypeOf(some2).constructor.getConstant())
  console.log(some2.constructor.getConstant()) // shortcut
  
  console.log(Object.getPrototypeOf(some2).constructor.getConstant())
  
}