const projectCounter = document.querySelector('.header__span')
const projectImages = document.querySelectorAll('.carrousel__img')

function arrayGeneretor(el) {
  const arr = Array.from(el);
  return arr
}

const projectArray = arrayGeneretor(projectImages)

function updateCounterElement(el, arr) {
  const counter = arr.length
  el.innerText = `[${counter}]`
  return el
}

updateCounterElement(projectCounter,projectArray)