window.onload = function() {
    addVideoClickListener()
}

addVideoClickListener = function() {
    video = document.getElementById('video')
    video.addEventListener("click", toggleAudio)
}

toggleAudio = function(e) {
    e.target.muted = !e.target.muted
}