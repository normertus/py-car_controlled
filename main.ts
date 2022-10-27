enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8723) {
        bitbot.go(BBDirection.Forward, 100)
    }
    if (receivedNumber == 8721) {
        bitbot.go(BBDirection.Reverse, 100)
    }
    if (receivedNumber == 8722) {
        bitbot.stop(BBStopMode.Brake)
    }
    if (receivedNumber == 8724) {
        bitbot.rotate(BBRobotDirection.Left, 50)
    }
    if (receivedNumber == 8725) {
        bitbot.rotate(BBRobotDirection.Right, 50)
    }
    if (receivedNumber == 8726) {
        bitbot.setLedColor(0x8000FF)
    }
})
input.onButtonPressed(Button.A, function () {
    bitbot.rotate(BBRobotDirection.Left, 100)
    basic.pause(2000)
})
radio.setGroup(52)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
loops.everyInterval(500, function () {
    bitbot.BBBias(BBRobotDirection.Left, 25)
    basic.pause(100)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
})
basic.forever(function () {
    bitbot.ledBrightness(9999)
    bitbot.ledRotate()
    bitbot.ledRainbow()
})
