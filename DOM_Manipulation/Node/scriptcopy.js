//Manipulasi DOM Node

//adding new paragraph
const newP = document.createElement('p');
const textNewP = document.createTextNode('New Paragraph');

newP.appendChild(textNewP);

const sectionA = document.getElementById('a');
sectionA.appendChild(newP);
newP.style.backgroundColor = 'lightgreen';

//using insertBefore
const newLi = document.createElement('li');
const textNewLi = document.createTextNode('New Text');

newLi.appendChild(textNewLi);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(newLi, li2);

//delete / remove
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//replace
const newH2 = document.createElement('h2');
const textH2 = document.createTextNode('New Chapter!');

newH2.appendChild(textH2);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

sectionB.replaceChild(newH2, p4);

