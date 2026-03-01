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
    today = new Date();
    h1.setAttribute('data-today', today.toDateString());
   h1.append('Today is ' + today.toDateString());
  } else if(window.innerWidth < 768 && window.innerWidth > 480) {
    // h1.textContent = 'Mobile View';
    today = new Date();
    h1.setAttribute('data-today', today.toDateString());
   h1.append('Today is ' + today.toDateString());
    h1.classList.add('mobile');
  } else {
    h1.textContent = 'Welcome to my project landing page.';
  }
});
