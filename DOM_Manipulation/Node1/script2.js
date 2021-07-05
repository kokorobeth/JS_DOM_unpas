const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
pBaru.appendChild(teksPBaru);
pBaru.style.backgroundColor = "lightgreen";

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Teks New');
liBaru.textContent = "New Text!";
document.body.appendChild(liBaru);

const ul = document.querySelector("section#b ul")
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const h2 = document.createElement('h2');
const teksH2 = document.createTextNode('Judul Baru');
h2.appendChild(teksH2);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
sectionB.replaceChild(h2, p4);
h2.style.backgroundColor = "lightblue";