

function asyncAndErrors() {

    Promise.resolve('promise 1-1')
        .then(val=>{throw 'promise 1: error'}) // exception was thrown
        .then(val=>'promise 1-2') // skipped
        .catch(err=>{console.log(err); return 'promise 1: exception was caught'}) // exception was caught
        .then(val=>console.log(val)) // 'promise 1: exception was caught'


    ;(async()=>{
        try {
            let val = await Promise.resolve('promise 2-1')
            throw 'promise 2: error'
            val = await 'promise 2-2'
        } catch (e){
            console.log(e)
            val = await 'promise 2: exception was caught'
        }
        console.log(val)
    })()


}