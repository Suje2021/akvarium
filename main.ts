input.onButtonPressed(Button.B, function () {
    images.createBigImage(`
        . . . . . . . . . .
        . # . . . . . . . .
        # . . . . . . . . .
        . # . . . . . . . .
        . . . . . . . . . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . # . # . . . . . .
        # # # . . . . . . .
        . # . # . . . . . .
        . . . . . . . . . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . # . # . .
        . . . . . . # # # .
        . . . . . # # # # #
        . . . . . . # # # .
        . . . . . # . # . .
        `).scrollImage(-1, 200)
})
