const info = document.getElementById('massage');
const us = document.getElementById('userNumber');
const ok = document.getElementById('ok');
const next = document.getElementById('next');


const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

const numb = Math.floor(Math.random() * arr.length);

let rand = (arr[numb])

function game() {
    if (us.value == rand) {
        info.textContent = `
        Всё верно, вы угадали, загадонное число это ${rand}!
        `
        next.innerHTML = `
        <button id='zan'>Начать заново</button>
        `

    }
    else {
        info.textContent = `
        Вы не угадали :( загаданно ${rand}
        `
        next.innerHTML = `
        <button id='zan'>Начать заново</button>
        `
    }
}

const zan = document.getElementById('next')
zan.addEventListener('click', () => {
    location.reload();
}
)
ok.addEventListener('click', game);