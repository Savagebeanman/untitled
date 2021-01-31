while (true) {
    if (input.acceleration(Dimension.X) < 0 || input.acceleration(Dimension.X) > 0) {
        music.wawawawaa.playUntilDone()
    } else {
        music.stopAllSounds()
    }
    
}
