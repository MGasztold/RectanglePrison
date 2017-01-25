## RectanglePrison

Script finds an intersection point of a line with one of the sides of a rectangle. The line is defined as follows:

- it starts at the `(x0, y0)` point
- it heads in a direction described by the given `angle` (from 0 to 360 degrees)

The rectangle is described by its width and height

Coordinate system definition:
<p align="center"><img src="coordinate_system.jpg" width="600" /></p>

## How to use

To see usage information:

	node rectangleprison.js --help

	Usage: rectangleprison [options]
	
	Options:

	-h, --help     output usage information
    -V, --version  output the version number
    --width <n>    width of the rectangle
    --height <n>   heigth of the rectangle
    -x, --x0 <n>   x coordinate of the start point
    -y, --y0 <n>   y coordinate of the start point
    --angle <n>    angle in degrees at which the line heads
    
#### Example output:

Call:

	node rectangleprison --height 10 --width 10 -x 5 -y 5 --angle 20

Result:

	Line function: y = -2.7474774194546208x + 18.737387097273103
	Found intersection with: top side
	Intersection point: (6.819851171331012,10)