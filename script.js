window.onload = function() {
    addVideoClickListener()
}

addVideoClickListener = function() {
    video = document.getElementById('video')
    video.addEventListener("click", toggleAudio)

    video.onmouseover = function(){showText()}
    video.onmouseout = function(){hideText()}
}

toggleAudio = function(e) {
    e.target.muted = !e.target.muted
}

showText = function() {
    toggleText = document.getElementById('toggle-text')
    toggleText.style.visibility = 'visible'
}

hideText = function() {
    toggleText = document.getElementById('toggle-text')
    toggleText.style.visibility = 'hidden'
}