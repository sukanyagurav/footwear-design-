const slides = document.querySelectorAll('.slide')
const slides_count = slides.length
const left =document.getElementById('left')
const right =document.getElementById('right')
const carousel =document.getElementById('carousel')
const paragraph =document.getElementById('description')
const icons =Array.from(document.getElementsByClassName('icons'))
const btn =Array.from(document.getElementsByClassName('btn'))
let current_slide=0
left.addEventListener('click',()=>{
    current_slide--
    if(current_slide < 0){
        current_slide = slides_count - 1
    }
    updateCarousel()
})
right.addEventListener('click',()=>{
    current_slide++
    if(current_slide > slides_count - 1 ){
        current_slide = 0
    }
    updateCarousel()
})
function updateCarousel(){
    carousel.style.transform= `translateX(${
        -current_slide * slides[0].offsetWidth}px)`

 document.body.style.background = `#${slides[current_slide].getAttribute(
            "data-bg"
        )}`;   
        carousel.style.color = `#${slides[current_slide].getAttribute(
        "data-fc"
    )}`
    paragraph.style.color= `#${slides[current_slide].getAttribute(
        "data-fc"
    )}`
 
     icons.forEach(ele =>{
        ele.style.color= `#${slides[current_slide].getAttribute(
            "data-fc"
        )}`
     })
     btn.forEach(ele =>{
        
        ele.style.backgroundColor= `#${slides[current_slide].getAttribute(
            "data-btn"
        )}`; 
        ele.style.color='#fff'
     })
}