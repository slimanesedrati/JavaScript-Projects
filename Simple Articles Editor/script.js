let slect_font_family = document.getElementById("f_f")
let font_weight = document.getElementById("font_w")
let font_size = document.getElementById("font_s")
let change_bc_text = document.getElementById("iverst_color")
let value_font_size = document.getElementById("value_size")
let p = document.getElementById("p")
let m = document.getElementById("m")
let text = document.getElementById("text")


// Change Font family
slect_font_family.addEventListener("blur",(e) => {
    text.style.fontFamily = e.target.value
})

// Change size
p.onclick = () => {
    if (+value_font_size.innerHTML >= 21 ) {
        p.disabled = true
        p.classList.add("max")
        p.style.cursor = 'not-allowed'
        value_font_size.innerHTML = +value_font_size.innerHTML+1
        text.style.fontSize = `${value_font_size.innerHTML}px`
    }
    else {
        m.disabled = false
        value_font_size.innerHTML = +value_font_size.innerHTML+1
        m.classList.remove("min")
        text.style.fontSize = `${value_font_size.innerHTML}px`
        p.style.cursor = 'pointer'
    }
}

m.addEventListener("click",(e) => {
    if (+value_font_size.innerHTML <= 16 ) {
        m.disabled = true
        m.classList.add("min")
        text.style.fontSize = `${value_font_size.innerHTML}px`
    }
    else {
        p.disabled = false
        value_font_size.innerHTML = +value_font_size.innerHTML-1
        text.style.fontSize = `${value_font_size.innerHTML}px`
        p.classList.remove("max")
        p.style.cursor = 'pointer'
    }

})




// Change FontWeight to Bold
font_weight.onclick = () => {
    if(font_weight.classList.contains("green")) {
        font_weight.classList.remove("green")
        text.style.fontWeight = 'normal'
    }
    else {
        font_weight.classList.add("green")
        text.style.fontWeight = 'bold'
    }
}

// Change BackgroundColor To black
change_bc_text.onclick = () => {
    if(text.classList.contains("white")) {
        text.classList.remove("white")
        text.classList.add('black')
        change_bc_text.classList.add('green')
    }
    else {
        text.classList.remove("black")
        text.classList.add('white')
        change_bc_text.classList.remove('green')
    }
}


