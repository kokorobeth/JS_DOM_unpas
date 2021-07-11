// const tUbahWarna = document.getElementById('ubahWarna');
// tUbahWarna.onclick = function() {
//     document.body.classList.toggle('biru-muda');
// };

// const tAcakWarna = document.createElement('button');
// const teksAcakWarna = document.createTextNode('Acak Warna');
// tAcakWarna.appendChild(teksAcakWarna);
// tUbahWarna.after(tAcakWarna);
// tAcakWarna.setAttribute('type', 'button')

// tAcakWarna.addEventListener('click', function() {
//     const r = Math.round(Math.random() * 255 + 1);
//     const g = Math.round(Math.random() * 255 + 1);
//     const b = Math.round(Math.random() * 255 + 1);

//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]')
// const sBiru = document.querySelector('input[name=sBiru]');

// sMerah.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;

//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +',100)';
// });

// sHijau.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;

//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// sBiru.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;

//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// document.body.addEventListener('mousemove', function(event) {
//     const xPos = Math.round((event.clientX / window.innerHeight) * 255);
//     const yPos = Math.round((event.clientY / window.innerHeight) * 255);

//     document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)';
// });

const changeColor = document.getElementById('ubahWarna');
changeColor.addEventListener('click', function() {
    document.body.classList.toggle('biru-tua');
});

const randomColor = document.createElement('button');
randomColor.textContent = 'Acak Warna';
changeColor.after(randomColor);
randomColor.setAttribute('type', 'button');

randomColor.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +', '+ b +')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +', 100)';
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +', 100)';
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +', '+ b +')';
});
