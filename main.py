def on_b_pressed():
    game.reset()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    global numberPoint, ranNum, index, ballCount, gameCoin
    if True:
        if gameCoin < 6:
            shoot.set_position(57, 55)
            animation.run_movement_animation(shoot,
                animation.animation_presets(animation.ease_up),
                1000,
                False)
            pause(1000)
            if ballCount == 0:
                ball_1.y = 0
                numberPoint = sprites.create(img("""
                    .
                """), SpriteKind.enemy)
                ranNum = randint(0, 44)
                while ball_1.y < destinationPoint:
                    index = 0
                    while index < 10:
                        ball_1.y += 1
                        numberPoint.y = ball_1.y + 8
                        numberPoint.x = ball_1.x
                        numberPoint.say_text(lottoList[ranNum])
                        pause(10)
                        index += 1
                lottoList.remove_at(ranNum)
            if ballCount == 1:
                ball_2.y = 0
                numberPoint = sprites.create(img("""
                    .
                """), SpriteKind.enemy)
                ranNum = randint(0, 43)
                while ball_2.y < destinationPoint - 20:
                    index = 0
                    while index < 10:
                        ball_2.y += 1
                        numberPoint.y = ball_2.y + 8
                        numberPoint.x = ball_2.x
                        numberPoint.say_text(lottoList[ranNum])
                        pause(10)
                        index += 1
                lottoList.remove_at(ranNum)
            if ballCount == 2:
                ball_3.y = 0
                numberPoint = sprites.create(img("""
                    .
                """), SpriteKind.enemy)
                ranNum = randint(0, 42)
                while ball_3.y < destinationPoint - 40:
                    index = 0
                    while index < 10:
                        ball_3.y += 1
                        numberPoint.y = ball_3.y + 8
                        numberPoint.x = ball_3.x
                        numberPoint.say_text(lottoList[ranNum])
                        pause(10)
                        index += 1
                lottoList.remove_at(ranNum)
            if ballCount == 3:
                ball_4.y = 0
                numberPoint = sprites.create(img("""
                    .
                """), SpriteKind.enemy)
                ranNum = randint(0, 41)
                while ball_4.y < destinationPoint - 60:
                    index = 0
                    while index < 10:
                        ball_4.y += 1
                        numberPoint.y = ball_4.y + 8
                        numberPoint.x = ball_4.x
                        numberPoint.say_text(lottoList[ranNum])
                        pause(10)
                        index += 1
                lottoList.remove_at(ranNum)
            if ballCount == 4:
                ball_5.y = 0
                numberPoint = sprites.create(img("""
                    .
                """), SpriteKind.enemy)
                ranNum = randint(0, 40)
                while ball_5.y < destinationPoint - 80:
                    index = 0
                    while index < 10:
                        ball_5.y += 1
                        numberPoint.y = ball_5.y + 8
                        numberPoint.x = ball_5.x
                        numberPoint.say_text(lottoList[ranNum])
                        pause(10)
                        index += 1
                lottoList.remove_at(ranNum)
            if ballCount == 5:
                ball_6.y = 0
                numberPoint = sprites.create(img("""
                    .
                """), SpriteKind.enemy)
                ranNum = randint(0, 39)
                while ball_6.y < destinationPoint - 100:
                    index = 0
                    while index < 10:
                        ball_6.y += 1
                        numberPoint.y = ball_6.y + 8
                        numberPoint.x = ball_6.x
                        numberPoint.say_text(lottoList[ranNum])
                        pause(10)
                        index += 1
                lottoList.remove_at(ranNum)
            ballCount += 1
        gameCoin += 1
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

index = 0
ranNum = 0
numberPoint: Sprite = None
ballCount = 0
gameCoin = 0
shoot: Sprite = None
ball_6: Sprite = None
ball_5: Sprite = None
ball_4: Sprite = None
ball_3: Sprite = None
ball_2: Sprite = None
ball_1: Sprite = None
destinationPoint = 0
createListNum = 0
lottoList: List[number] = []
varBall3 = 0
varBall1 = 0
varBall2 = 0
varBall4 = 0
varBall5 = 0
varBall6 = 0
scene.set_background_color(11)
bgBar = sprites.create(assets.image("""
    myImage4
"""), SpriteKind.player)
bgBar.set_position(145, 90)
ballBarRight = sprites.create(assets.image("""
    myImage6
"""), SpriteKind.player)
ballBarRight.set_position(140, 72)
text_sprite = textsprite.create("Lotto 6/45")
text_sprite.set_position(58, 104)
lottoList = []
for index2 in range(45):
    lottoList[createListNum] = createListNum + 1
    createListNum += 1
ball_num = 45
destinationPoint = 110
lottoMachine = sprites.create(assets.image("""
    myImage3
"""), SpriteKind.player)
lottoMachine.x = 58
ball_1 = sprites.create(assets.image("""
    whiteBall
"""), SpriteKind.player)
ball_2 = sprites.create(assets.image("""
    yellowBall
"""), SpriteKind.player)
ball_3 = sprites.create(assets.image("""
    orangeBall
"""), SpriteKind.player)
ball_4 = sprites.create(assets.image("""
    pinkBall
"""), SpriteKind.player)
ball_5 = sprites.create(assets.image("""
    brownBall
"""), SpriteKind.player)
ball_6 = sprites.create(assets.image("""
    redBall
"""), SpriteKind.player)
ball_1.set_position(140, -10)
ball_2.set_position(140, -10)
ball_3.set_position(140, -10)
ball_4.set_position(140, -10)
ball_5.set_position(140, -10)
ball_6.set_position(140, -10)
ballAnimations = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.player)
ballAnimations.x = 70
ballAnimations2 = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.player)
ballAnimations2.x = 43
ballAnimations2.y = 60
ballAnimations3 = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.player)
ballAnimations3.x = 70
ballAnimations4 = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.player)
ballAnimations4.set_position(43, 56)
ballAnimations5 = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.player)
ballAnimations5.set_position(50, 70)
shoot = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.player)
shoot.set_position(57, 70)
ballBar = sprites.create(assets.image("""
    myImage5
"""), SpriteKind.player)
ballBar.set_position(57, 20)
animation.run_image_animation(shoot, assets.animation("""
    myAnim
"""), 90, True)
animation.run_image_animation(ballAnimations5,
    assets.animation("""
        myAnim
    """),
    100,
    True)
animation.run_image_animation(ballAnimations4,
    assets.animation("""
        myAnim
    """),
    43,
    True)
animation.run_image_animation(ballAnimations3,
    assets.animation("""
        myAnim
    """),
    88,
    True)
animation.run_image_animation(ballAnimations2,
    assets.animation("""
        myAnim
    """),
    129,
    True)
animation.run_image_animation(ballAnimations,
    assets.animation("""
        myAnim
    """),
    69,
    True)
animation.run_movement_animation(shoot,
    animation.animation_presets(animation.shake),
    1700,
    True)
animation.run_movement_animation(ballAnimations,
    animation.animation_presets(animation.wave_left),
    1700,
    True)
animation.run_movement_animation(ballAnimations2,
    animation.animation_presets(animation.shake),
    2000,
    True)
animation.run_movement_animation(ballAnimations3,
    animation.animation_presets(animation.bobbing_left),
    1230,
    True)
animation.run_movement_animation(ballAnimations4,
    animation.animation_presets(animation.bobbing_right),
    400,
    True)
animation.run_movement_animation(ballAnimations5,
    animation.animation_presets(animation.wave_right),
    1000,
    True)
animation.run_movement_animation(lottoMachine,
    animation.animation_presets(animation.bobbing),
    3000,
    True)