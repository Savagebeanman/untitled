while True:
    if input.acceleration(Dimension.Z) > 3 or input.acceleration(Dimension.Z) < -3:
        light.set_all(light.rgb(0,255,0))
        pause(3000)
        #music.wawawawaa.play_until_done()
    else:
        music.stop_all_sounds()
        light.clear()
        pause(1000)