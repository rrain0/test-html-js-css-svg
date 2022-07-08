


/*
    Событие DOMContentLoaded происходит когда весь HTML был полностью загружен и пройден парсером,
    не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов.
    Значительно отличающееся от него событие load используется для отслеживания только полностью загруженной страницы.
 */
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM Content Loaded event')

    // создание не привязанного ни к чему элемента
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Hello !!!'

    // найти элемент по id
    const firstDiv = document.getElementById('first-div')
    // добавление элемента в дерево отрисованных элементов
    firstDiv.appendChild(h1)

    // div with id='second-div'
    const secondDiv = document.querySelector('div#second-div')
    // добавление элемента в div#second-div
    // один элемент не может быть в 2 местах, так что он удаляется из div#first-div
    secondDiv.appendChild(h1)
})