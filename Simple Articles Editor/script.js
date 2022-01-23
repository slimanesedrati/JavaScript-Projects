
let select_family = document.getElementById("select_family"),
    font_weight = document.getElementById("font_weight"),
    font_size = document.getElementById("font_size"),
    iverst_color = document.getElementById("iverst_color"),
    current_size = document.getElementById("current_size"),
    plus = document.getElementById("plus"),
    minus = document.getElementById("minus"),
    text = document.getElementById("text");


// Change Font family
select_family.addEventListener("change",(e) => {
    text.style.fontFamily = e.target.value
})

// Change Font size
plus.onclick = () => {
    if (+current_size.innerHTML >= 21 ) {
        plus.disabled = true
        plus.classList.add("max")
        plus.style.cursor = 'not-allowed'
        current_size.innerHTML = +current_size.innerHTML+1
        text.style.fontSize = `${current_size.innerHTML}px`
    }
    else {
        minus.disabled = false
        current_size.innerHTML = +current_size.innerHTML+1
        minus.classList.remove("min")
        text.style.fontSize = `${current_size.innerHTML}px`
        plus.style.cursor = 'pointer'
    }
}

minus.addEventListener("click",(e) => {
    if (+current_size.innerHTML <= 17 ) {
        current_size.innerHTML = 16
        minus.disabled = true
        minus.classList.add("min")
        text.style.fontSize = `${current_size.innerHTML}px`
    }
    else {
        plus.disabled = false
        current_size.innerHTML = +current_size.innerHTML-1
        text.style.fontSize = `${current_size.innerHTML}px`
        plus.classList.remove("max")
        plus.style.cursor = 'pointer'
    }

})


// Change BackgroundColor To black
iverst_color.onclick = () => {
    if(text.classList.contains("white")) {
        text.classList.remove("white")
        text.classList.add('black')
        iverst_color.classList.add('green')
    }
    else {
        text.classList.remove("black")
        text.classList.add('white')
        iverst_color.classList.remove('green')
    }
}
