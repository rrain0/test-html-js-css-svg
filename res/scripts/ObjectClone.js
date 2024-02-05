


function ObjectClone(){
  
  
  /*export function clone<T extends object>(
    orig: T,
    update?: { -readonly [Prop in keyof T]?: T[Prop] }
  ): T {
    let newInstance = Object.assign(Object.create(Object.getPrototypeOf(orig)), orig) as T
    Object.assign(newInstance, update)
    return newInstance
  }*/
  
  
  function clone(
    orig,
    update
  ) {
    let newInstance = Object.assign(Object.create(Object.getPrototypeOf(orig)), orig)
    Object.assign(newInstance, update)
    return newInstance
  }
  
  
}