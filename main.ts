namespace SpriteKind {
    export const person = SpriteKind.create()
}
let mySprite3: Sprite = null
let mySprite2: Sprite = null
story.printText("Show Racism The Red Card", 80, 20, 1, 0)
story.printText("Enjoy!", 80, 60, 1, 0)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.Player)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `,img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `],
200,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d e e e e e f . . . 
    . . . f e 4 e d d 4 f . . . . . 
    . . . f 2 2 e d d e f . . . . . 
    . . f f 5 5 f e e f f f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `,img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e d d 4 . . . . 
    . . . f 2 2 2 2 e d d e . . . . 
    . . f f 5 5 4 4 f e e f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `],
200,
characterAnimations.rule(Predicate.MovingLeft)
)
scene.cameraFollowSprite(mySprite)
story.startCutscene(function () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
    story.setPagePauseLength(1000, 1000)
    story.spriteSayText(mySprite, "*breaths*", 15, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite, "COME ON!", 15, 0, story.TextSpeed.Fast)
    story.spriteSayText(mySprite, "NO", 15, 0, story.TextSpeed.Fast)
    tiles.setTileAt(tiles.getTileLocation(0, 4), assets.tile`myTile2`)
    music.smallCrash.play()
    music.smallCrash.play()
    pause(1000)
    mySprite.setVelocity(50, 0)
    pause(2000)
    color.startFade(color.originalPalette, color.Black, 2000)
    color.pauseUntilFadeDone()
    mySprite.setVelocity(0, 0)
    story.cancelCurrentCutscene()
})
story.startCutscene(function () {
    tiles.setCurrentTilemap(tilemap`level4`)
    mySprite2 = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.person)
    color.startFade(color.Black, color.originalPalette, 1000)
    mySprite2.ay = 500
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(13, 5))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 5))
    mySprite.setVelocity(75, 0)
    pause(2000)
    mySprite.setVelocity(0, 0)
    for (let index = 0; index < 5; index++) {
        mySprite.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
        pause(200)
    }
    mySprite2.vy += -15
    story.spriteSayText(mySprite2, "Hey little kid.", 13, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite2, "What?", 15, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite, "Little slave", 13, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite, "Hope you die.", 13, 0, story.TextSpeed.Fast)
    story.spriteSayText(mySprite, "HAHAHAHA", 13, 0, story.TextSpeed.Fast)
    scene.cameraFollowSprite(mySprite2)
    mySprite.setVelocity(-100, 0)
    story.spriteSayText(mySprite2, "Why can't people be nice?", 15, 0, story.TextSpeed.Slow)
    color.FadeToBlack.startScreenEffect(2000)
    story.cancelCurrentCutscene()
})
story.startCutscene(function () {
    color.startFadeFromCurrent(color.originalPalette)
    tiles.setCurrentTilemap(tilemap`level11`)
    mySprite.destroy(effects.fire, 5000)
    mySprite.sayText("a", 100, true)
    mySprite.setFlag(SpriteFlag.Invisible, true)
    mySprite2.setPosition(80, 60)
    mySprite2.ay = 0
    scene.setBackgroundColor(15)
    mySprite2.setFlag(SpriteFlag.Invisible, true)
    story.printText("Lots of people in the world are racist.", 80, 60, 1, 0, story.TextSpeed.Fast)
    story.printText("Black people face discrimination.", 80, 60, 1, 0, story.TextSpeed.Fast)
    story.printText("Even from the police.", 80, 60, 1, 0, story.TextSpeed.Fast)
    story.cancelCurrentCutscene()
})
story.startCutscene(function () {
    scene.setBackgroundColor(13)
    tiles.setCurrentTilemap(tilemap`level13`)
    mySprite2.setFlag(SpriteFlag.Invisible, false)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 5))
    mySprite3 = sprites.create(img`
        . . . . f f f f f . . . 
        . . f f e e e e e f . . 
        . f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f f 
        . f 4 d 4 d d d d f f . 
        . f f f 4 d d b b f . . 
        . . f e e 4 4 4 e f . . 
        . . 4 d d e 1 1 1 f . . 
        . . e d d e 1 1 1 f . . 
        . . f e e f 6 6 6 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `, SpriteKind.Food)
    tileUtil.centerCameraOnTile(tiles.getTileLocation(7, 5))
    characterAnimations.loopFrames(
    mySprite3,
    [img`
        . . . f f f f f . . . . 
        . . f e e e e e f f . . 
        . f e e e e e e e f f . 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        f f e 4 4 f f 4 e 4 f f 
        . f f d d d d 4 d 4 f . 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e e f . . 
        . . f 1 1 1 e d d 4 . . 
        . . f 1 1 1 e d d e . . 
        . . f 6 6 6 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f . 
        . . f b b d e e f f f . 
        . . f e 4 e d d 4 f . . 
        . . f 1 1 e d d e f . . 
        . f f 6 6 f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f f 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e d d 4 . 
        . . f 1 1 1 1 e d d e . 
        . f f 6 6 6 6 f e e f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(4, 5))
    color.startFadeFromCurrent(color.originalPalette, 1000)
    story.spriteSayText(mySprite2, "What did I do?", 15, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite3, "You ran away.", 11, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite2, "Because I'm scared you'll kill me!", 15, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite3, "Why would that be?", 11, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite2, "Lots of people are racist!", 15, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite3, ".", 11, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite3, "Don't care", 11, 0, story.TextSpeed.Normal)
    mySprite3.vx = -75
    pause(1000)
    mySprite3.destroy()
    color.FadeToBlack.startScreenEffect(2000)
    story.cancelCurrentCutscene()
})
story.startCutscene(function () {
    pause(2000)
    color.startFadeFromCurrent(color.originalPalette, 2000)
    scene.setBackgroundColor(15)
    tileUtil.centerCameraOnTile(tiles.getTileLocation(5, 5))
    tiles.setCurrentTilemap(tilemap`level11`)
    mySprite2.setPosition(80, 60)
    mySprite2.setFlag(SpriteFlag.Invisible, true)
    story.printText("So in the end,", 80, 60, 1, 0, story.TextSpeed.Fast)
    story.printText("The moral of this is,", 80, 60, 1, 0, story.TextSpeed.Fast)
    story.printText("Don't be racist.", 80, 60, 1, 0, story.TextSpeed.Fast)
    story.printText("It's not cool, neither funny.", 80, 60, 1, 0, story.TextSpeed.Fast)
    story.printText("So if you're racist...", 80, 60, 1, 0, story.TextSpeed.Fast)
    story.printText("You're gonna have a bad time.", 80, 60, 2, 0, story.TextSpeed.Slow)
    story.startCutscene(function () {
        story.printText("Credits: Oliver Butryn", 80, 10, 1, 0, story.TextSpeed.VeryFast)
        story.printText("Animation: me", 80, 30, 1, 0, story.TextSpeed.VeryFast)
        story.printText("Coding: me", 80, 50, 1, 0, story.TextSpeed.VeryFast)
        story.printText("Everything: me", 80, 70, 1, 0, story.TextSpeed.VeryFast)
        story.printText("Goodbye!", 80, 60, 1, 0, story.TextSpeed.Fast)
        pause(2000)
        game.reset()
    })
})
