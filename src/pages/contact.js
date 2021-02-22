function contact() {
  const el = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Contact';

  const list = document.createElement('ul');
  list.classList.add('contact-list');

  const address = document.createElement('li');
  address.innerHTML = '123 Cactus Lane, Bristol, UK';
  const email = document.createElement('li');
  email.innerHTML = 'spicyhot@tacosforall.com';
  const phone = document.createElement('li');
  phone.innerHTML = '07123 45678';

  list.appendChild(address);
  list.appendChild(email);
  list.appendChild(phone);

  el.appendChild(h1);
  el.appendChild(list);

  return el;
}

export default contact();
