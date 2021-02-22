function home() {
  const el = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Tacolicious 🌵';
  el.appendChild(h1);

  const img = document.createElement('img');
  img.setAttribute('src', './assets/tacos.jpg');
  img.setAttribute('alt', 'tacos');
  el.appendChild(img);

  const p = document.createElement('p');
  p.innerHTML =
    'The best place in town for spicy fresh,hom delicious tacos day or night!';
  el.appendChild(p);

  return el;
}

export default home();
