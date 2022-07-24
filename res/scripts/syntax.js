

function syntax(){
    {
        let a = undefined
        a ??= 8
        console.log('a ??= 8', a)
        a ??= 9
        console.log('a ??= 9', a)
    }
}