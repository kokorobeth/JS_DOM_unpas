const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector("section#b ul");
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Teks baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});

p4.addEventListener('click', function() {
    p4.style.backgroundColor = 'lightgreen';
});