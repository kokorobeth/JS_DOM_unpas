const tUbahWarna = document.getElementById('ubahWarna');
tUbahWarna.onclick = function() {
    document.body.classList.toggle('biru-muda');
};

const tAcakWarna = document.createElement('button');
const teksAcakWarna = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksAcakWarna);
tUbahWarna.after(tAcakWarna);
tAcakWarna.setAttribute('type', 'button')

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});