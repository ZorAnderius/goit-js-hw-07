const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

const handlerInput = e => {
    const str = e.target.value.trim();
    nameOutput.textContent = str ? str : 'Anonymous';
}

nameInput.addEventListener('input', handlerInput);