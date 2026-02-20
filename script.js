function updateTime() {
    var currentTime = new Date().toLocaleString();
    document.getElementById('timeElement').innerHTML = currentTime;
}
setInterval(updateTime, 1000);
updateTime();