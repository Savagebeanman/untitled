while (true) {
    if (input.acceleration(Dimension.Z) > 0 || input.acceleration(Dimension.Z) < 0) {
        light.showAnimationFrame(light.rainbowAnimation)
    } else {
        // music.wawawawaa.play_until_done()
        music.stopAllSounds()
        light.clear()
    }
    
}
