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

const keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ENTER', 'Shift Left', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift Right', 'Ctrl Left', 'Win', 'Alt Left', '', 'Alt Right', 'Ctrl Right', '←', '↓', '→'];

function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i==14 || i==29 || i==42 || i==55) {
            out += '<div class="clearfix"></div>';
        }
        out += '<div class="keys" data = "' + keyboard[i] + '">' + String(keyboard[i]) + '</div>';
    }

    document.querySelector('.keyboard').innerHTML = out;

    textarea.focus();

    const keys = document.querySelectorAll('.keyboard .keys');
    keys[13].classList.add('elements');
    keys[29].classList.add('elements');
    keys[41].classList.add('elements');
    keys[58].classList.add('space');
    keys[42].classList.add('shift-left');
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
            textarea.value = textarea.value.slice(0);
            
        } else if (code === 'Caps Lock') {
            capsLockOn = !capsLockOn;
            this.classList.toggle('on', capsLockOn);

        } else if (code === 'Shift Left') {
            shiftPressed = false;

        } else {
            textarea.value += code;
        }
    }
});

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


    
    


