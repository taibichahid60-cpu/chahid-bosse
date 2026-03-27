let teldoos = 0
let toon_numeer = 0
input.onPinPressed(TouchPin.P0, function () {
    teldoos += 1
    basic.showNumber(teldoos)
})
input.onButtonPressed(Button.A, function () {
    teldoos = 0
    basic.showNumber(teldoos)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.EightG, function () {
    let schaarsteenpapier = 0
    basic.showNumber(randint(1, 6))
    if (schaarsteenpapier) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    teldoos = 0
    basic.showNumber(teldoos)
})
input.onButtonPressed(Button.B, function () {
    teldoos += 1
    basic.showNumber(teldoos)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Sad)
    basic.clearScreen()
})
input.onGesture(Gesture.ThreeG, function () {
    toon_numeer += 1
    basic.showNumber(teldoos)
})
basic.forever(function () {
    basic.showString("Haloo wereld!")
})
basic.forever(function () {
    basic.showString("hello wereld")
})
