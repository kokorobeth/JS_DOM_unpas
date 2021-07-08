//mengganti judul berdasarkan ID
const judul = document.getElementById('judul');
judul.style.backgroundColor = 'lightblue';
judul.style.color = 'red';
judul.innerHTML = 'Aziz Kurniawan';

const p = document.getElementsByTagName('p');
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightgreen';
}

const h1 =document.getElementsByTagName('h1')[0];
h1.style.backgroundColor = 'blue';

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'dirubah menjadi JavaScript';

const p4 = document.getElementsByClassName('p4')[0];
p4.innerHTML = 'dirubah juga menjadi JavaScript';

