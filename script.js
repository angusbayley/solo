window.onload = function() {
    addVideoHoverListener()
    addVideoClickListener()
}

addVideoHoverListener = function() {
    containerElements = document.getElementsByClassName("mouseover-toggle")
    for (var i=0; i<containerElements.length; i++) {
        containerElements[i].onmouseover = function(){showText()}
        containerElements[i].onmouseout = function(){hideText()}
    }
}

addVideoClickListener = function() {
    container = document.getElementById("container")
    container.addEventListener("click", toggleAudio)
}

toggleAudio = function(e) {
    console.log('toggleAudio called')
    
    // ignore link clicks so opening in new bg tab doesn't stop audio:
    if (e.srcElement.nodeName !== "A") {
        video = document.getElementById('video')
        video.muted = !video.muted
    }
}

showText = function() {
    toggleText = document.getElementById('toggle-text')
    toggleText.style.visibility = 'visible'
}

hideText = function() {
    toggleText = document.getElementById('toggle-text')
    toggleText.style.visibility = 'hidden'
}