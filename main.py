while True:
    if input.acceleration(Dimension.X) < 0 or input.acceleration(Dimension.X) > 0 :
        music.wawawawaa.play_until_done()
    else:
        music.stop_all_sounds()