var attachSoundToButton = function (soundName) {
    var button = document.getElementById(soundName)
    var audio = new Audio('sounds/' + soundName + '.wav')
    var playSound = function () {
        audio.play()
    }
    button.addEventListener('click', playSound)
    button.addEventListener('mouseenter', playSound)
}
attachSoundToButton('boom')
attachSoundToButton('clap')
attachSoundToButton('hihat')
attachSoundToButton('kick')
attachSoundToButton('openhat')
attachSoundToButton('snare')
attachSoundToButton('tink')
attachSoundToButton('tom')
attachSoundToButton('ride')