//DOM Selection
//document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc'
judul.innerHTML = 'Aziz Kurniawan';

//document.getElementsByTagName
// --> HTMLCollections
const p = document.getElementsByTagName('p');
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

//document.getElementsByClassName
// -> HTMLCollection

const p2 = document.getElementsByClassName('p2')[0];

p2.innerHTML = 'Ini diubah menjadi JavaScript';