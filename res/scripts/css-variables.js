

function onColorChange(){
    const root = document.documentElement

    console.log(
        '--first-color value was:',
        getComputedStyle(root).getPropertyValue('--first-color') // get property value
    )

    root.style.setProperty('--first-color', 'brown') // set property value
}