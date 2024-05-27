const container = document.querySelector('#grid-cont');

for (let i = 0; i < 256; i++) {

    const square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);
}

const sqr = document.querySelectorAll('div.square');

sqr.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        div.classList.add('filled');
    });
});