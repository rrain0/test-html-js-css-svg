
// JavaScript замыкания (closures)
function jsClosures(){
    let cancel = false

    // функция замкнулась на переменной cancelled и может читать
    // её реальные значения даже после завершения родительской функции jsClosures()
    ;(async () => {
        const value = await new Promise((res,rej)=>setTimeout(res,3000,'not cancelled'))
        if (!cancel) console.log(value)
        else console.log('cancelled')
    })()

    cancel = true
}