const close = document.querySelectorAll('.close');

close.forEach(function(elm) {
    elm.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    })
});

const nama = document.querySelector('.nama');
console.log(nama.nextElementSibling);