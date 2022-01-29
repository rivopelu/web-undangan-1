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



// audio play
var mySong = document.getElementById("mysong");
var icon = document.getElementById("icon-audio");
var playPause = document.getElementById("play-pause");

playPause.onclick =  function(){
    if(mySong.paused){
        mySong.play();
        icon.classList.remove("bi-play-fill");
        icon.classList.add("bi-pause-fill");
    }else{
        mySong.pause();
        icon.classList.add("bi-play-fill");
        icon.classList.remove("bi-pause-fill");
    }
}



// toggle undangan
var awalSection = document.getElementById("toggle-undangan");
var toggleAwal = document.getElementById("awal-button");

toggleAwal.onclick = function(){
    
    awalSection.classList.add("awal-active")
}

