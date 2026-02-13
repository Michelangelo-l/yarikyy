const valentinka = document.getElementById("valentinka")
const gif_funny_cat = document.getElementById("gif_funny_cat")
const button_dalee = document.getElementById("button_dalee")
const button_daa = document.getElementById("button_daa")
const button_nea = document.getElementById("button_nea")
const text_1 = document.getElementById("text_1")
const text_2= document.getElementById("text_2")
const text_3 = document.getElementById("text_3")
const ganster = document.getElementById("ganster")
const screamer = document.getElementById("screamer")
const tiolka1 = document.getElementById("tiolka1")
const tiolka2 = document.getElementById("problemna_tiolka")
const tiolka3 = document.getElementById("tiolka3")
const kot = document.getElementById("kot")
const sound_screamer = new Audio('./sound_screamer.mp3')

function checkHash() {
    const hash = window.location.hash;
    if (hash === '#dalee') {
        valentinka.style.display = 'none';
        button_dalee.style.display = 'none';
        ganster.style.display = 'none';
        text_1.style.display = 'none';
        text_3.style.display = 'none';
        tiolka1.style.display = 'none';
        tiolka2.style.display = 'none';
        tiolka3.style.display = 'none';
        kot.style.display = 'none';
        text_2.style.display = 'block';
        gif_funny_cat.style.display = 'inline-block';
        button_daa.style.display = 'inline-block';
        button_nea.style.display = 'inline-block';
    
    } else if (hash === '#daa') {
        valentinka.style.display = 'none';
        button_dalee.style.display = 'none';
        gif_funny_cat.style.display = 'none';
        text_1.style.display = 'none'
        text_2.style.display = 'none'
        button_daa.style.display = 'none';
        button_nea.style.display = 'none';
        ganster.style.display = 'inline-block';
        text_3.style.display = 'block';
        tiolka1.style.display = 'inline-block';
        tiolka2.style.display = 'inline-block';
        tiolka3.style.display = 'inline-block';
        kot.style.display = 'inline-block';

    } else {
        valentinka.style.display = 'inline-block';
        button_dalee.style.display = 'inline-block';
        text_1.style.display = 'block';
        gif_funny_cat.style.display = 'none';
        button_daa.style.display = 'none';
        button_nea.style.display = 'none';
        text_2.style.display = 'none';
        text_3.style.display = 'none';
        tiolka1.style.display = 'none';
        tiolka2.style.display = 'none';
        tiolka3.style.display = 'none';
        kot.style.display = 'none';
    }
}

button_nea.addEventListener("click", () => {
    screamer.style.display = "block";
    sound_screamer.play();

    setTimeout(() => {
        screamer.style.display = "none";
    }, 2000);
});

// 🔥 запуск після повного завантаження DOM
document.addEventListener('DOMContentLoaded', checkHash);

// 🔥 реагування на подальшу зміну
window.addEventListener('hashchange', checkHash);