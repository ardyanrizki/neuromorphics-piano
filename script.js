const keys = document.querySelectorAll('.key')
console.log(keys);

for (const key of keys) {
    key.addEventListener(
        'click', function () {
        return playNote(key)
        } 
    )
}

function playNote(key) {
    const note = document.getElementById(key.title)
    note.currentTime = 0
    note.play()
    key.classList.add('active')
    note.onended = function () {
        key.classList.remove('active')
    }
}

// KEYBOARD PRESS

const keysForWhite = ['s', 'd', 'f', 'g', 'h', 'j', 'k']
const keysForBlack = ['e', 'r', 'y', 'u', 'i']
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

document.addEventListener('keydown', function(e) {
    if (e.repeat) {
        return
    }

    const key = e.key
    const whiteKeyIndex = keysForWhite.indexOf(key)
    const blackKeyIndex = keysForBlack.indexOf(key)

    if (whiteKeyIndex > -1) {
        playNote(whiteKeys[whiteKeyIndex])
    }
    if (blackKeyIndex > -1) {
        playNote(blackKeys[blackKeyIndex])
    }
})

// CHECKBOX

function toggle() {

    if (document.getElementById('toggle').value == 'off'){
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('toggle').value = 'on';
    }
    else if ( document.getElementById('toggle').value="on" ) {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('toggle').value = 'off';
    }
}