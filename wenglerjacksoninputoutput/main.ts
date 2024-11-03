input.onButtonPressed(Button.A, function () {
    turtle.turnLeft()
})
input.onButtonPressed(Button.AB, function () {
    turtle.back(1)
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
})
input.onGesture(Gesture.Shake, function () {
    servos.P0.run(0)
    servos.P1.run(50)
    turtle.home()
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    turtle.home()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    turtle.forward(1)
    servos.P1.run(0)
    servos.P0.run(50)
})
music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
