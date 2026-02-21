// time
function updateTime() {
    var currentTime = new Date().toLocaleString();
    document.getElementById('timeElement').innerHTML = currentTime;
}
setInterval(updateTime, 1000);
updateTime();

// dragging logic
dragElement(document.getElementById("welcome"));

function dragElement(element) {
    let initialX = 0, initialY = 0, currentX = 0, currentY = 0;
    const header = document.getElementById(element.id + "header");

    if (header) {
        header.onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e) {
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = drag;

    }

    function drag(e) {
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// open and close logic
const welcomeScreen = document.getElementById("welcome");
const welcomeClose = document.getElementById("welcomeclose");
const welcomeOpen = document.getElementById("welcomeopen");

welcomeClose.addEventListener("click", () => {
    welcomeScreen.style.display = "none";
});

welcomeOpen.addEventListener("click", () => {
    welcomeScreen.style.display = "block";
});