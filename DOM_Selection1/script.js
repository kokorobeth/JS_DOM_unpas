//DOM Selection
//document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = 'lightblue';
judul.innerHTML = 'Max Kurniawan Funkkeh';

//document.getElementsByTagName
// --> HTMLCollections
const p = document.getElementsByTagName('p');
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightgreen';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.backgroundColor = 'pink';

//document.getElementsByClassName
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'diubah menjadi JavaScript';

const p2 = document.getElementsByClassName('p2')[0];
p2.innerHTML = 'diubah juga menjadi JavaScript';

