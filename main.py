while True:
    music.set_volume(255)
    light.set_brightness(255)
    
    if input.acceleration(Dimension.Z) > 3 or input.acceleration(Dimension.Z) < -3:
        light.set_all(light.rgb(0,255,0))
        music.wawawawaa.play_until_done()
        pause(2000)
        
    else:
        music.stop_all_sounds()
        light.clear()
        pause(1000)