while True:
    if input.acceleration(Dimension.Z) > 0 or input.acceleration(Dimension.Z) < 0:
        light.show_animation_frame(light.rainbowAnimation)
        #music.wawawawaa.play_until_done()
    else:
        music.stop_all_sounds()
        light.clear()