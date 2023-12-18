const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const images = document.querySelectorAll('img')
const dots = document.querySelectorAll('ul .dot')

let i = 0

next.addEventListener('click', () => {
    dots[i].classList.remove("active")
    images[i].classList.remove('active')
    i++
    if(i === images.length){
        i = 0
    }
    images[i].classList.add('active')  
    dots[i].classList.add("active")
})

prev.addEventListener('click', ()=>{
    dots[i].classList.remove("active")

    images[i].classList.remove('active')
    i--
    if(i === -1){
        i = images.length - 1
    }
    images[i].classList.add('active')    
    dots[i].classList.add("active")


})
//Indicators
dots.forEach(function (dot, index){
    dot.addEventListener('click', function(){
        dots[i].classList.remove('active')
        images[i].classList.remove('active')

        i = index
        dots[i].classList.add('active')
        images[i].classList.add('active')
    })
})