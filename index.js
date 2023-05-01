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

const keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ENTER', 'Shift Left', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift Right', 'Ctrl Left', 'Win', 'Alt Left', '', 'Alt Right', 'Ctrl Right', '←', '↓', '→'];

function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i==14 || i==29 || i==42 || i==55) {
            out += '<div class="clearfix"></div>';
        }
        //out += '<div class="keys" data = "' + keyboard[i] + '">' + String(keyboard[i]) + '</div>';
        let keyClass = 'keys';

        switch (keyboard[i]) {

            case 'Backspace':
        keyClass += ' double';
        break;
            case 'Tab':
        keyClass += ' double';
        break;
            case 'Caps Lock':
        keyClass += ' double';
        break;
            case 'Enter':
        keyClass += ' double';
        break;
            case 'Shift':
        keyClass += ' double';
        break;
            case 'DEL':
        keyClass += ' double';
        break;
            case 'Ctrl':
        keyClass += ' double';
        break;
            case 'Alt':
        keyClass += ' double';
        break;
            case '':
        keyClass += ' spacebar';
        break;

        default:

        break;
    }

    out += `<div class="${keyClass}" data="${keyboard[i]}">${keyboard[i]}</div>`;
    }

    document.querySelector('.keyboard').innerHTML = out;

    textarea.focus();

    const elementBackspace = document.querySelectorAll('.keys');
    elementBackspace[13].classList.add('new-class');

    const elementCapsLock = document.querySelectorAll('.keys');
    elementCapsLock[29].classList.add('new-class');

    const elementEnter = document.querySelectorAll('.keys');
    elementEnter[41].classList.add('new-class');

    const elementSpace = document.querySelectorAll('.keys');
    elementSpace[58].classList.add('space');

    const elementShiftLeft = document.querySelectorAll('.keys');
    elementShiftLeft[42].classList.add('shift-left');

    
}

init();

document.onkeydown = function(e) {
    // Находим кнопку клавиатуры, соответствующую нажатой клавише
    const key = document.querySelector(`.keyboard .keys[data='${e.key}']`);
    if (key) {
      // Добавляем класс "active" к выбранной кнопке
        key.classList.add('active');
      // Отменяем действие по умолчанию для нажатия этой клавиши
        e.preventDefault();
        textarea.value += e.key;
    }
};

document.onkeyup = function(e) {
    // Находим кнопку клавиатуры, соответствующую отпущенной клавише
    const key = document.querySelector(`.keyboard .keys[data='${e.key}']`);
    if (key) {
      // Удаляем класс "active" с выбранной кнопки
        key.classList.remove('active');
      // Вставляем символ от нажатой клавиши в текстовое поле
        if (e.key !== 'Shift' && e.key !== 'Caps Lock' && e.key !== 'Ctrl' && e.key !== 'Alt') {
        const textarea = document.querySelector('.text');
        textarea.value += e.key;
    }
      // Отменяем действие по умолчанию для отпускания этой клавиши
        e.preventDefault();
    }
};



document.querySelectorAll('.keyboard .keys').forEach((element) => {
    element.onclick = function (event) {
        document.querySelectorAll('.keyboard .keys').forEach((element) => {
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);

        if (code === 'Backspace') {
            textarea.value = textarea.value.slice(0, -1);
        } else if (code === 'ENTER') {
            textarea.value += '\n';
        
        } else if (code === 'Tab') {
            textarea.value += '\t';
        
        } else if (code === 'DEL') {
            textarea.value = '';

        } else if (code === 'Shift') {
            capsLockOn = !capsLockOn;
            this.classList.toggle('on', capsLockOn);

        } else {
            textarea.value += code;
        }
    }
});

/*document.querySelectorAll('.keyboard .keys').forEach(key => {
    key.onclick = function() {
        document.querySelectorAll('.keyboard .keys').forEach(key => {
            key.classList.remove('active');
            });
            // Добавляем класс "active" к выбранной кнопке
this.classList.add('active');
// Находим значение атрибута "data" у выбранной кнопки
const keyValue = this.getAttribute('data');
// Вставляем символ или выполняем действие для выбранной клавиши
const textarea = document.querySelector('.text');
switch (keyValue) {
case 'Backspace':
textarea.value = textarea.value.slice(0, -1);
break;
case 'Tab':
textarea.value += '\t';
break;
case 'Caps Lock':
capsLockOn = !capsLockOn;
this.classList.toggle('on', capsLockOn);
break;
case 'Enter':
textarea.value += '\n';
break;
case 'Shift':
shiftPressed = true;
break;
case 'DEL':
textarea.value = '';
break;
case 'Ctrl':
ctrlPressed = true;
break;
case 'Alt':
altPressed = true;
break;
case '':
textarea.value += '';
break;
case '↑':
// обработка стрелочек
break;
case '←':
// обработка стрелочек
break;
case '↓': 
// обработка стрелочек
break;
case '→':
// обработка стрелочек
break;
default:
if (shiftPressed || capsLockOn) {
textarea.value += keyValue.toUpperCase();
} else {
textarea.value += keyValue;
}
break;
}
};
});*/

document.onkeyup = function(e) {
    // Находим кнопку клавиатуры, соответствующую отпущенной клавише
    const key = document.querySelector(`.keyboard .keys[data='${e.key}']`);
    if (key) {
      // Удаляем класс "active" с выбранной кнопки
        key.classList.remove('active');
        if (e.key === 'Shift') {
        shiftPressed = false;
    } else if (e.key === 'Ctrl') {
        ctrlPressed = false;
    } else if (e.key === 'Alt') {
        altPressed = false;
    }
    }
};

