controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    if (true) {
        if (gameCoin < 6) {
            shoot.setPosition(57, 55)
            animation.runMovementAnimation(shoot, animation.animationPresets(animation.easeUp), 1000, false)
            pause(1000)
            if (ballCount == 0) {
                ball_1.y = 0
                numberPoint = sprites.create(img`
                    .
                `, SpriteKind.Enemy)
                ranNum = randint(0, 44)
                while (ball_1.y < destinationPoint) {
                    index = 0
                    while (index < 10) {
                        ball_1.y += 1
                        numberPoint.y = ball_1.y + 8
                        numberPoint.x = ball_1.x
                        numberPoint.sayText(lottoList[ranNum])
                        pause(10)
                        index += 1
                    }
                }
                lottoList.removeAt(ranNum)
            }
            
            if (ballCount == 1) {
                ball_2.y = 0
                numberPoint = sprites.create(img`
                    .
                `, SpriteKind.Enemy)
                ranNum = randint(0, 43)
                while (ball_2.y < destinationPoint - 20) {
                    index = 0
                    while (index < 10) {
                        ball_2.y += 1
                        numberPoint.y = ball_2.y + 8
                        numberPoint.x = ball_2.x
                        numberPoint.sayText(lottoList[ranNum])
                        pause(10)
                        index += 1
                    }
                }
                lottoList.removeAt(ranNum)
            }
            
            if (ballCount == 2) {
                ball_3.y = 0
                numberPoint = sprites.create(img`
                    .
                `, SpriteKind.Enemy)
                ranNum = randint(0, 42)
                while (ball_3.y < destinationPoint - 40) {
                    index = 0
                    while (index < 10) {
                        ball_3.y += 1
                        numberPoint.y = ball_3.y + 8
                        numberPoint.x = ball_3.x
                        numberPoint.sayText(lottoList[ranNum])
                        pause(10)
                        index += 1
                    }
                }
                lottoList.removeAt(ranNum)
            }
            
            if (ballCount == 3) {
                ball_4.y = 0
                numberPoint = sprites.create(img`
                    .
                `, SpriteKind.Enemy)
                ranNum = randint(0, 41)
                while (ball_4.y < destinationPoint - 60) {
                    index = 0
                    while (index < 10) {
                        ball_4.y += 1
                        numberPoint.y = ball_4.y + 8
                        numberPoint.x = ball_4.x
                        numberPoint.sayText(lottoList[ranNum])
                        pause(10)
                        index += 1
                    }
                }
                lottoList.removeAt(ranNum)
            }
            
            if (ballCount == 4) {
                ball_5.y = 0
                numberPoint = sprites.create(img`
                    .
                `, SpriteKind.Enemy)
                ranNum = randint(0, 40)
                while (ball_5.y < destinationPoint - 80) {
                    index = 0
                    while (index < 10) {
                        ball_5.y += 1
                        numberPoint.y = ball_5.y + 8
                        numberPoint.x = ball_5.x
                        numberPoint.sayText(lottoList[ranNum])
                        pause(10)
                        index += 1
                    }
                }
                lottoList.removeAt(ranNum)
            }
            
            if (ballCount == 5) {
                ball_6.y = 0
                numberPoint = sprites.create(img`
                    .
                `, SpriteKind.Enemy)
                ranNum = randint(0, 39)
                while (ball_6.y < destinationPoint - 100) {
                    index = 0
                    while (index < 10) {
                        ball_6.y += 1
                        numberPoint.y = ball_6.y + 8
                        numberPoint.x = ball_6.x
                        numberPoint.sayText(lottoList[ranNum])
                        pause(10)
                        index += 1
                    }
                }
                lottoList.removeAt(ranNum)
            }
            
            ballCount += 1
        }
        
        gameCoin += 1
    }
    
})
let index = 0
let ranNum = 0
let numberPoint : Sprite = null
let ballCount = 0
let gameCoin = 0
let shoot : Sprite = null
let ball_6 : Sprite = null
let ball_5 : Sprite = null
let ball_4 : Sprite = null
let ball_3 : Sprite = null
let ball_2 : Sprite = null
let ball_1 : Sprite = null
let destinationPoint = 0
let createListNum = 0
let lottoList : number[] = []
let varBall3 = 0
let varBall1 = 0
let varBall2 = 0
let varBall4 = 0
let varBall5 = 0
let varBall6 = 0
scene.setBackgroundColor(11)
let bgBar = sprites.create(assets.image`
    myImage4
`, SpriteKind.Player)
bgBar.setPosition(145, 90)
let ballBarRight = sprites.create(assets.image`
    myImage6
`, SpriteKind.Player)
ballBarRight.setPosition(140, 72)
let text_sprite = textsprite.create("Lotto 6/45")
text_sprite.setPosition(58, 104)
lottoList = []
for (let index2 = 0; index2 < 45; index2++) {
    lottoList[createListNum] = createListNum + 1
    createListNum += 1
}
let ball_num = 45
destinationPoint = 110
let lottoMachine = sprites.create(assets.image`
    myImage3
`, SpriteKind.Player)
lottoMachine.x = 58
ball_1 = sprites.create(assets.image`
    whiteBall
`, SpriteKind.Player)
ball_2 = sprites.create(assets.image`
    yellowBall
`, SpriteKind.Player)
ball_3 = sprites.create(assets.image`
    orangeBall
`, SpriteKind.Player)
ball_4 = sprites.create(assets.image`
    pinkBall
`, SpriteKind.Player)
ball_5 = sprites.create(assets.image`
    brownBall
`, SpriteKind.Player)
ball_6 = sprites.create(assets.image`
    redBall
`, SpriteKind.Player)
ball_1.setPosition(140, -10)
ball_2.setPosition(140, -10)
ball_3.setPosition(140, -10)
ball_4.setPosition(140, -10)
ball_5.setPosition(140, -10)
ball_6.setPosition(140, -10)
let ballAnimations = sprites.create(assets.image`
    myImage0
`, SpriteKind.Player)
ballAnimations.x = 70
let ballAnimations2 = sprites.create(assets.image`
    myImage0
`, SpriteKind.Player)
ballAnimations2.x = 43
ballAnimations2.y = 60
let ballAnimations3 = sprites.create(assets.image`
    myImage0
`, SpriteKind.Player)
ballAnimations3.x = 70
let ballAnimations4 = sprites.create(assets.image`
    myImage0
`, SpriteKind.Player)
ballAnimations4.setPosition(43, 56)
let ballAnimations5 = sprites.create(assets.image`
    myImage0
`, SpriteKind.Player)
ballAnimations5.setPosition(50, 70)
shoot = sprites.create(assets.image`
    myImage0
`, SpriteKind.Player)
shoot.setPosition(57, 70)
let ballBar = sprites.create(assets.image`
    myImage5
`, SpriteKind.Player)
ballBar.setPosition(57, 20)
animation.runImageAnimation(shoot, assets.animation`
    myAnim
`, 90, true)
animation.runImageAnimation(ballAnimations5, assets.animation`
        myAnim
    `, 100, true)
animation.runImageAnimation(ballAnimations4, assets.animation`
        myAnim
    `, 43, true)
animation.runImageAnimation(ballAnimations3, assets.animation`
        myAnim
    `, 88, true)
animation.runImageAnimation(ballAnimations2, assets.animation`
        myAnim
    `, 129, true)
animation.runImageAnimation(ballAnimations, assets.animation`
        myAnim
    `, 69, true)
animation.runMovementAnimation(shoot, animation.animationPresets(animation.shake), 1700, true)
animation.runMovementAnimation(ballAnimations, animation.animationPresets(animation.waveLeft), 1700, true)
animation.runMovementAnimation(ballAnimations2, animation.animationPresets(animation.shake), 2000, true)
animation.runMovementAnimation(ballAnimations3, animation.animationPresets(animation.bobbingLeft), 1230, true)
animation.runMovementAnimation(ballAnimations4, animation.animationPresets(animation.bobbingRight), 400, true)
animation.runMovementAnimation(ballAnimations5, animation.animationPresets(animation.waveRight), 1000, true)
animation.runMovementAnimation(lottoMachine, animation.animationPresets(animation.bobbing), 3000, true)
