const judul = document.getElementById('judul');
judul.style.color = "blue";
judul.style.backgroundColor = "pink";
judul.innerHTML = "Aziz Kurniawan";

const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "lightblue";
}

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.color = "grey";
li2.style.fontSize = "25px";
li2.style.backgroundColor = "lightgreen";

const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'lightgreen';
p4.style.color = 'yellow';
