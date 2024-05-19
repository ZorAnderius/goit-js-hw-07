function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color');
const btn = document.querySelector('.change-color');

const handlerClick = () => {
  const color = getRandomHexColor();
  spanColor.textContent = color;
  document.body.style.backgroundColor = color;
}

btn.addEventListener('click', handlerClick);
