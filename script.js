const container = document.querySelector('#grid-cont');

function boardSet(size) {

let squareCount = size*size;
let squareDim = (1/size)*100;

    for (let i = 0; i < squareCount; i++) {

        const square = document.createElement('div');
        square.className = 'square';
        square.style.width = squareDim + '%';
        square.style.height = squareDim + '%';
        container.appendChild(square);
    }
    const sqr = document.querySelectorAll('div.square');
    sqr.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            let target = e.target;
            let shade = Number(target.style.opacity);
            if (shade <= 1) {
                shade += 0.1;
                target.style.opacity = shade;
            }
            div.classList.add('filled');

        });
    });    

}

boardSet(16);

function sizePrompt() {
    var sizeInput = prompt("How many squares per side do you want? (max of 100)");
    document.querySelector('#error').innerText = '';
    if (sizeInput < 100 && sizeInput > 1) {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
}
        boardSet(sizeInput);

    } else {
     console.log('Wrong Answer');
     document.querySelector('#error').innerText = 'You typed ' + sizeInput + '. You seriously fucking typed ' + sizeInput + '. When I told you to choose a number between 2 and 100. You idiot. ' + sizeInput + '. I can\'t believe you\'ve done this. You absolute dummy.';
    }
    console.log('hey');
}