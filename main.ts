while (true) {
    if (input.acceleration(Dimension.Y) < 0 || input.acceleration(Dimension.Y) > 0) {
        light.showAnimationFrame(light.rainbowAnimation)
        music.wawawawaa.playUntilDone()
    } else {
        music.stopAllSounds()
    }
    
}
