while True:
    if input.acceleration(Dimension.Z) > 3 or input.acceleration(Dimension.Z) < -3:
        light.set_all(light.rgb(0,255,0))
        music.wawawawaa.play_until_done()
        pause(3000)
        
    else:
        music.stop_all_sounds()
        light.set_all(light.rgb(255,0,0))
        pause(1000)