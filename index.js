const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const containerElements = document.querySelector('.container');

const heading = document.createElement('h1');
heading.innerText = 'VIRTUAL KEYBOARD';
heading.classList.add('heading');
containerElements.appendChild(heading);


const textarea = document.createElement('textarea');
textarea.classList.add('text');
containerElements.appendChild(textarea);

const containerKeyboard = document.createElement('div');
containerKeyboard.classList.add('keyboard');
containerElements.appendChild(containerKeyboard);

//console.log(containerElements);

const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 'Backspace', 'Tab', 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 'DEL', 'Caps Lock', 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 'ENTER', 'Shift', 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 32, 'Alt', 'Ctrl', '←', '↓', '→'];

/*document.onkeypress = function(event) {
    //console.log(event);
    keyboard.push(event.charCode);
    console.log(keyboard);
}*/

function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i==14 || i==29 || i==42 || i==55) {
            out += '<div class="clearfix"></div>';
        }
        out += '<div class="keys" data = "' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    document.querySelector('.keyboard').innerHTML = out;
}

init();


/*const keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ENTER', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', '⇧', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'];
function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i==14 || i==29 || i==42 || i==55) {
            out += '<div class="clearfix"></div>';
        }
        out += '<div class="keys" data = "' + keyboard[i] + '">' + String(keyboard[i]) + '</div>';
    }
    document.querySelector('.keyboard').innerHTML = out;
}

init();*/


document.onkeypress = function(event) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('.keyboard .keys').forEach((element) => {
        element.classList.remove('active');
    });
    document.querySelector('.keyboard .keys[data="' + event.keyCode + '"]').classList.add('active');
}

document.querySelectorAll('.keyboard .keys').forEach((element) => {
    element.onclick = function (event) {
        document.querySelectorAll('.keyboard .keys').forEach((element) => {
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
    }
});




