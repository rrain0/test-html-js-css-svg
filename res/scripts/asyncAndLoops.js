

function asyncAndLoops() {
  
  const wait = async (value, delay) => {
    return new Promise((resolve, reject) => setTimeout(resolve, delay, value))
  }
  const delayedLog = async (value, delay) => console.log(await wait(value, delay))
  
  
  // for-i
  /*{
      const array = ["a","b","c"]
      console.log('for-i: starting')
      for (let i = 0; i < array.length; i++) {
          console.log(`for-i: array[${i}] = ${array[i]}`)
      }
      console.log('for-i: finished!!!')
  }*/
  
  
  // for-i await
  // works synchronously - every next iteration waits for prev iteration Promise to complete
  /*{
      const array = ["a","b","c"]
      ;(async () => {
          console.log('for-i await: starting')
          let delay = array.length*100+100
          for (let i = 0; i < array.length; i++) {
              await delayedLog(`for-i await: elem: ${array[i]}`, delay-=100)
          }
          console.log('for-i await: finished!!!')
      })()
  }*/
  
  
  // for await (let i = 0; i < array.length; i++){} - doesn't compile
  /*{

  }*/
  
  
  // for-of
  /*{
      const array = ["a","b","c"]
      console.log('for-of: starting')
      for (const item of array) {
          console.log(`for-of: ${item}`)
      }
      console.log('for-of: finished!!!')
  }*/
  
  
  // for-await-of await
  // works synchronously - every next iteration waits for prev iteration
  /*{
      const array = ["a","b","c"]
      ;(async () => {
          console.log('for-await-of await: starting')
          let delay = array.length*100+100
          for await (const elem of array) {
              await delayedLog(`for-await-of await: elem: ${elem}`, delay-=100)
          }
          console.log('for-await-of await: finished!!!')
      })()
  }*/
  
  
  // for-await-of async
  // If the current iterator's element is Promise then for-await awaits it before executing for-body.
  // After loop ends, for-await calls <iterator>.return()
  //   to perform any cleanup and awaits its execution.
  {
    async function* asyncGenerator() {
      const array = ["a", "b", "c"]
      let delay = array.length * 100 + 100
      for (const elem of array) yield wait(elem, delay -= 100)
    }
    ;(async () => {
      console.log('for-await-of async: starting')
      for await (const elem of asyncGenerator()) {
        console.log('for-await-of async elem:', elem)
      }
      console.log('for-await-of async: finished!!!')
    })()
  }
  
  
  // for-each
  {
    const array = ["a","b","c"]
    console.log('for-each: starting')
    array.forEach(it=>console.log(`for-each: elem: ${it}`))
    array.forEach((elem,i,arr)=>console.log(`for-each: elem: ${elem}, i: ${i}, arr: ${arr}`))
    console.log('for-each: finished!!!')
  }
  
  
  // for-each of async
  // works asynchronously, but don't wait for the result
  {
    const array = ["a","b","c"]
    let delay = array.length*100+100
    console.log('for-each of async: starting')
    array.forEach(async it => await delayedLog(`for-each of async: elem: ${it}`, delay-=100))
    console.log('for-each of async: finished!!!')
    // outputs: start -> finish -> c -> b -> a
  }
  
  
  
  
  
  // for-each save promise - can be used with any for-loop
  // works asynchronously, wait for the result
  {
    const array = ["a","b","c"]
    ;(async()=>{
    let delay = array.length*100+100
    const promises = []
    console.log('for-each save promise: starting')
    array.forEach(it=>promises.push(delayedLog(`for-each save promise: elem: ${it}`, delay-=100)))
    await Promise.allSettled(promises) // wait for all promises to complete
    console.log('for-each save promise: finished!!!')
  })()
    // outputs: start -> c -> b -> a -> finish
  }
  
  
  // map to promises
  // works asynchronously, wait for the result
  {
    const array = ["a","b","c"]
    ;(async()=>{
    let delay = array.length*100+100
    console.log('map to promises: starting')
    await Promise.allSettled(array.map(it=>delayedLog(`map to promises: elem: ${it}`, delay-=100)))
    console.log('map to promises: finished!!!')
  })()
    // outputs: start -> c -> b -> a -> finish
  }
  
  
}