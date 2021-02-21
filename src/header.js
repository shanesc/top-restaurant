function header(...links) {
  links = links || [];
  const el = document.createElement('header');

  const nav = document.createElement('ul');
  nav.classList.add('nav');

  links.forEach((title) => {
    const link = document.createElement('li');
    link.classList.add('link');
    link.id = title.toLowerCase();
    link.innerHTML = title;
    nav.appendChild(link);
  });

  el.appendChild(nav);
  return el;
}

export default header;
