(()=>{"use strict";const e=function(){const e=document.createElement("div"),t=document.createElement("h1");t.innerHTML="Tacolicious 🌵",e.appendChild(t);const n=document.createElement("img");n.setAttribute("src","./assets/tacos.jpg"),n.setAttribute("alt","tacos"),e.appendChild(n);const c=document.createElement("p");return c.innerHTML="The best place in town for spicy fresh,hom delicious tacos day or night!",e.appendChild(c),e}(),t=function(){const e=document.createElement("div");return e.innerHTML="Menu",e}(),n=function(){const e=document.createElement("div"),t=document.createElement("h1");t.innerHTML="Contact";const n=document.createElement("ul");n.classList.add("contact-list");const c=document.createElement("li");c.innerHTML="123 Cactus Lane, Bristol, UK";const d=document.createElement("li");d.innerHTML="spicyhot@tacosforall.com";const o=document.createElement("li");return o.innerHTML="07123 45678",n.appendChild(c),n.appendChild(d),n.appendChild(o),e.appendChild(t),e.appendChild(n),e}(),c=document.querySelector("#content");function d(){2===c.childElementCount&&c.removeChild(c.lastChild)}c.appendChild(function(...e){e=e||[];const t=document.createElement("header"),n=document.createElement("ul");return n.classList.add("nav"),e.forEach((e=>{const t=document.createElement("li");t.classList.add("link"),t.id=e.toLowerCase(),t.innerHTML=e,n.appendChild(t)})),t.appendChild(n),t}("Home","Menu","Contact")),c.appendChild(e),document.querySelector("#home").addEventListener("click",(()=>{d(),c.appendChild(e)})),document.querySelector("#menu").addEventListener("click",(()=>{d(),c.appendChild(t)})),document.querySelector("#contact").addEventListener("click",(()=>{d(),c.appendChild(n)}))})();