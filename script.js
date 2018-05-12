window.onload = function() {
    addVideoClickListener()
}

addVideoClickListener = function() {
    overlay = document.getElementById('container-overlay')
    overlay.addEventListener("click", toggleAudio)

    overlay.onmouseover = function(){showText()}
    overlay.onmouseout = function(){hideText()}
}

toggleAudio = function(e) {
    video = document.getElementById('video')
    video.muted = !video.muted
}

showText = function() {
    toggleText = document.getElementById('toggle-text')
    toggleText.style.visibility = 'visible'
}

hideText = function() {
    toggleText = document.getElementById('toggle-text')
    toggleText.style.visibility = 'hidden'
}