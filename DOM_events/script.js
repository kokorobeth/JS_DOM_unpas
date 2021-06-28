// //onclick
// const p3 = document.querySelector('.p3');

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');

// p2.onclick = ubahWarnaP2;

// //eventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Text baru');

    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
})

p4.addEventListener('click', function() {
    p3.style.backgroundColor = 'lightblue';
})

//Perbedaan eventHandler & addEventListener
//Kalo di eventHandler
// const p3 = document.querySelector('.p3');

// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function() {
//     p3.style.color = 'red';
// }

//kalo di addEventListener
// const p3 = document.querySelector('.p3');
// p3.addEventListener('click', function() {
//     p3.style.backgroundColor = 'lightblue';
// });

// p3.addEventListener('click', function() {
//     p3.style.color = 'red';
// });

