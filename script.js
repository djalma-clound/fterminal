const bars = document.querySelector('#bars');
const menu = document.querySelector('#menu');
const links = document.querySelectorAll('#menu li a');

bars.addEventListener('click', () => {
    menu.classList.toggle('active');
});
links.forEach(links =>{
    links.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('#hero h1');
  if (window.innerWidth > 768) {
    h1.textContent = 'Desktop View';
    h1.classList.add('desktop');
  } else if(window.innerWidth < 768 && window.innerWidth > 480) {
    h1.textContent = 'Mobile View';
    h1.classList.add('mobile');
  } else {
    h1.textContent = 'Small Screen View';
  }
});