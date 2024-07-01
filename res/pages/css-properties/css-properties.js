

function onColorChange(){
    const html = document.documentElement

    console.log(
        'prev value of --first-color:',
        getComputedStyle(html).getPropertyValue('--first-color') // get property value
    )

    html.style.setProperty('--first-color', 'brown') // set property value
}
