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
