import math
from gcode2dplotterart import Plotter

LAYER_1 = 'black'

plotter = Plotter(
  units="mm",
  x_min = 0,
  x_max = 220,
  y_min = -150,
  y_max = 0,
  feed_rate=10000,
  output_directory="./output",
  include_border_layer=True,
  include_preview_layer=True,
  handle_out_of_bounds='Warning' # Some points will be out of bounds for this, that's ok.
)

def plot_sine_wave(y_offset, amplitude, wavelength):
  path = []

  # range() only takes integers. If want 10 points per mm, we need to scale up by 10, calculate the sin, then divide by 10.
  scale_up = 10
  scale_down = 1 / scale_up

  for step in range(plotter.x_min * scale_up, plotter.x_max * scale_up):
    x = step * scale_down
    y = amplitude * math.sin((2 * math.pi * x) / wavelength)
    y += y_offset
    path.append((x, y))
  
  return path

plotter.add_layer(LAYER_1)

TOTAL_WAVES = 10

for i in range(1, TOTAL_WAVES + 1): # Wavelengths of 0 cause a divide by 0 error so I start at 1.
  # To experiment - change all the numbers here.
  # My plotter goes from 0 to -150, so I need to offset in the negative direction.
  path = plot_sine_wave(y_offset=-(i**2.1), amplitude=1 * i, wavelength = 10) 
  plotter.layers[LAYER_1].add_path(path)

plotter.save()

  

