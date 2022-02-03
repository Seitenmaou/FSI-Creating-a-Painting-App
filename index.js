
let selectedColor = 'blue'

const painting = document.querySelector('.painting')
painting.addEventListener('click', function(e)
{
    e.target.style.backgroundColor = selectedColor
})
painting.addEventListener('dblclick',function(e)
{
    e.target.style.backgroundColor = 'white'
})

const colorChoiceBlue = document.querySelector('#blue')
colorChoiceBlue.addEventListener('click',function(e)
{
    selectedColor = 'blue'
})

const colorChoiceRed = document.querySelector('#red')
colorChoiceRed.addEventListener('click',function(e)
{
    selectedColor = 'red'
})

const colorChoiceYellow = document.querySelector('#yellow')
colorChoiceYellow.addEventListener('click',function(e)
{
    selectedColor = 'yellow'
})

const colorChoicegreen = document.querySelector('#green')
colorChoicegreen.addEventListener('click',function(e)
{
    selectedColor = 'green'
})