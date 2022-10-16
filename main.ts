input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Asleep)
})
music.setVolume(29)
music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
basic.showString("Hello kim")
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
