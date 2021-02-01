while (true) {
    if (input.acceleration(Dimension.Z) > 3 || input.acceleration(Dimension.Z) < -3) {
        light.setAll(light.rgb(0, 255, 0))
        pause(3000)
    } else {
        // music.wawawawaa.play_until_done()
        music.stopAllSounds()
        light.clear()
        pause(1000)
    }
    
}
