function mobileMenuActive() {
    let body = document.body

    body.classList.toggle("overflowHidden")
}

let slideIndex = 1
ExibirCards(slideIndex)

function plusDivs(n) {
    ExibirCards(slideIndex += n)
}

function ExibirCards(n) {
    let card = document.getElementsByClassName("card")
    if(n > card.length) {
        slideIndex = 1
        // console.log("n > 1. foi para primeiro card")
    }
    if(n < 1) {
        slideIndex = card.length
        // console.log("n < 1. foi para último card")
    }

    for(let i = 0; i < card.length; i++) {
        card[i].style.display = "none"
        console.log(`card ${i} está oculto`)
    }
    card[slideIndex-1].style.display = "flex"
    // console.log(`card ${slideIndex} está visível`)
}

let bannerIndex = 1
ExibirSlide(bannerIndex)

function addSlide(n) {
    ExibirSlide(bannerIndex += n)
}

function activeSlide(n) {
    ExibirSlide(bannerIndex = n)
}

function ExibirSlide(n) {
    let slide = document.getElementsByClassName("slide")
    let dots = document.getElementsByClassName("dot")

    if(n > slide.length) {
        bannerIndex = 1
    }
    if(n < 1) {
        bannerIndex = slide.length
    }
    
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"
    }
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-pink", "")
    }
    slide[bannerIndex-1].style.display = "block"
    dots[bannerIndex-1].className += " dot-pink"
}