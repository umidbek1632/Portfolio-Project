let bi_list = document.querySelector('.bi-list')
let bi_x = document.querySelector('.bi-x')
let header = document.getElementById('header')

bi_list.addEventListener('click', ()=>{
    bi_list.classList.add('d-none')
    bi_x.classList.remove('d-none')
    header.style.marginLeft = '0px'
})
bi_x.addEventListener('click', ()=>{
    bi_x.classList.add('d-none')
    bi_list.classList.remove('d-none')
    header.style.marginLeft = '-300px'
})


const words = ["I am freelancer", "I am developer"];
let index = 0;
let textElement = document.getElementById("text");

function typeWord(word, callback) {
    let i = 0;
    textElement.textContent = "";
    let interval = setInterval(() => {
        textElement.textContent += word[i];
        
        i++;
        if (i === word.length) {
            clearInterval(interval);
            setTimeout(() => deleteWord(callback), 1000);
        }
    }, 150);
}

function deleteWord(callback) {
    let text = textElement.textContent;
    let i = text.length;
    let interval = setInterval(() => {
        textElement.textContent = text.substring(0, i);
        i--;
        if (i < 0) {
            clearInterval(interval);
            setTimeout(callback, 500);
        }
    }, 100);
}

function loop() {
    typeWord(words[index], () => {
        index = (index + 1) % words.length;
        setTimeout(loop, 500);
    });
}

loop();