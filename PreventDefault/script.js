// const card = document.querySelector('.card');
// const close = document.querySelector('.close');
// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

//DoM traversal
const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//     })
// }

//cara lain
close.forEach(function(elm) {
    elm.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    })
});

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement);