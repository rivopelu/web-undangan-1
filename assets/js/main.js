// aos bulat Bot 
const bulatBot = document.querySelectorAll('.bulat-bot');
const coundownKet = document.querySelectorAll('.coundown-ket');
const galeryimg = document.querySelectorAll('.img-galery');

bulatBot.forEach((bulat, i) => {
    bulat.dataset.aosDelay = i * 250;
})
coundownKet.forEach((ket, i) => {
    ket.dataset.aosDelay = i * 250;
})
galeryimg.forEach((ket, i) => {
    ket.dataset.aosDelay = i * 30;
})



// countdown date
var countDate = new Date ('Apr 04 2022 00:00:00').getTime();

function acara(){
    var now = new Date().getTime();
    gap = countDate - now;

    var detik = 1000;
    var menit = detik * 60;
    var jam = menit * 60 ;
    var hari = jam * 24;

    var h = Math.floor(gap / (hari));
    var j = Math.floor(gap % (hari) / (jam));
    var m = Math.floor(gap % (jam) / (menit));
    var d = Math.floor(gap % (menit) / (detik));


    document.getElementById('hari').innerText = h;
    document.getElementById('jam').innerText = j;
    document.getElementById('menit').innerText = m;
    document.getElementById('detik').innerText = d;

}
setInterval(function(){
    acara();
}, 1000);

