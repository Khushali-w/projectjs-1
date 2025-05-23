let body = document.querySelector('body')
let HeadAnc = document.querySelector(".navbar")
console.log(HeadAnc)
function lightBg(){
    body.style.background = '#fff'
    body.style.color = '#000'
    HeadAnc.style.color="black"
}

function darkBg(){
    body.style.background = '#000'
    body.style.color = 'white'
    HeadAnc.style.color = 'white'
}