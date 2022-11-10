enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8723) {
        bitbot.go(BBDirection.Forward, 100)
    }
    if (receivedNumber == 8721) {
        bitbot.stop(BBStopMode.Brake)
    }
    if (receivedNumber == 8724) {
        bitbot.rotatems(BBRobotDirection.Left, 90, 125)
        bitbot.go(BBDirection.Forward, 100)
    }
    if (receivedNumber == 8725) {
        bitbot.rotatems(BBRobotDirection.Right, 90, 125)
        bitbot.go(BBDirection.Forward, 100)
    }
    if (receivedNumber == 8726) {
        bitbot.go(BBDirection.Reverse, 100)
    }
})
radio.setGroup(52)
bitbot.setLedColor(0x8000FF)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
})
