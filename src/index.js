import header from './header';
import home from './pages/home';
import menu from './pages/menu';
import contact from './pages/contact';

const content = document.querySelector('#content');

content.appendChild(header('Home', 'Menu', 'Contact'));
content.appendChild(home);

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', () => {
  removeLastChild();
  content.appendChild(home);
});

const menuLink = document.querySelector('#menu');
menuLink.addEventListener('click', () => {
  removeLastChild();
  content.appendChild(menu);
});

const contactLink = document.querySelector('#contact');
contactLink.addEventListener('click', () => {
  removeLastChild();
  content.appendChild(contact);
});

function removeLastChild() {
  if (content.childElementCount === 2) {
    content.removeChild(content.lastChild);
  }
}
