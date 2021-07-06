// const card = document.querySelector('.card');
// const close = document.querySelector('.close');
// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

//DoM traversal
// const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//     })
// }

//cara lain
// close.forEach(function(elm) {
//     elm.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     })
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('OK');
//     })
// })

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement);

const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    if( e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});