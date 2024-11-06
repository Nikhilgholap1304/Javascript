const box = document.querySelector(".box");
const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
  box.classList.toggle('active');
  if (btn.innerHTML === 'hide') {
    btn.innerHTML = 'show'
  } else {
    btn.innerHTML = 'hide'
  }
  // (btn.innerHTML === 'hide') ? 'show':'hide' //not working
})