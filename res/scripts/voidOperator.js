

async function voidOperator(){
  /*
    'void expression' - evaluates expression and returns undefined
   */
  console.log('----------void operator:')
  console.log('void 2 === 2', void 2 === 2) // means ((void 2) === 2) that means (undefined === 2)
  console.log('void (2 === 2)', void (2 === 2)) // means (void (2 === 2)) that means (undefined)
  let f = async()=>6
  console.log('f()', f())
  console.log('void f()', void f()) // means not Promise<number> but undefined
  console.log('await f()', await f())
  console.log('void await f()', void await f()) // means not 6 but undefined
}