while (true) {
    if (input.acceleration(Dimension.Z) > 3 || input.acceleration(Dimension.Z) < -3) {
        light.setAll(light.rgb(0, 255, 0))
        music.wawawawaa.playUntilDone()
        pause(2000)
    } else {
        music.stopAllSounds()
        light.clear()
        pause(1000)
    }
    
}
