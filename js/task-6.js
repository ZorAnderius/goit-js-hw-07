function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputNumber = document.querySelector("input[type='number']");
const creatBtn = document.querySelector("button[data-create]");
const deletBtn = document.querySelector("button[data-destroy]");
const boxes = document.getElementById('boxes');

/**create markup template
 * 
 * @param {Number} number 
 * @returns {undefined}
 */
const createMarkup = (number) => {
  let str = '';
  let size = 30;
  if (number >= 1 && number <= 100) {
    boxes.innerHTML = '';
    for (let i = 1; i <= number; i++){
      str += `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()};"></div>`;
      size += 10;
    }
  }
  boxes.insertAdjacentHTML('afterbegin', str);
}

/**destroy HTML markup with boxes
 * @returns {undefined}
 */
const destroyBoxes = () => {
  boxes.innerHTML = '';
  deletBtn.removeEventListener('click', destroyBoxes);
}

/**handler for click in create button
 * 
 * @returns {undefined}
 */
const handlerBoxes = () => {
  const number = inputNumber.value.trim();
  if (isNaN(number)) {
    return alert('Fill line with number only');
  }
  createMarkup(number);
  inputNumber.value = '';
  deletBtn.addEventListener('click', destroyBoxes);
}

creatBtn.addEventListener('click', handlerBoxes);
