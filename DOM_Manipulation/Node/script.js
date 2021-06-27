// DOM Manipulation
//membuat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

//menyimpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

//menyimpan pBaru diakhir paragraf section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//menggunakan insertBefore
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Text baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

//menghapus
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//replace / mengganti
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);



//menandai mana aja yang udah dirubah
h2Baru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';
pBaru.style.backgroundColor = 'lightblue';