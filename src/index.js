import './styles/main.css';
import './styles/responsive.css';

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer2');
const mainElement = document.querySelector('main');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
  });