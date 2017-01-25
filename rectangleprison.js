var math = require('mathjs');
var program = require('commander');
var pjson = require('./package.json');

program
    .version(pjson.version)
    .usage('[options]')
    .option('-v, --vertical <n>', 'Length of the vertical side', parseInt, 0)
    .option('-h, --horizontal <n>', 'Length of the horizontal side', parseInt, 0)
    .option('-x, --xcoordinate <n>', 'x coordinate of the point')
    .option('-y, --ycoordinate <n>', 'y coordinate of the point')
    .option('-a, --angle <n>', 'angle in degrees at which the line points')
    .parse(process.argv);

computeIntersection(program.vertical, program.horizontal, program.angle, program.xcoordinate, program.ycoordinate);

function computeIntersection(verticalSideLength, horizontalSideLength, angleDeg, x0, y0) {
    var angle = (180.0 - angleDeg) * math.pi / 180.0;
    // first compute the linear function coefficients:
    var a = math.cos(angle) / math.sin(angle);
    var b = y0 - x0 * (math.cos(angle) / math.sin(angle));
    console.log('function: y = ' + a + 'x + ' + b);

    var intersectionSide;
    var intersection_x;
    var intersection_y;

    // find intersection in the given direction
    if (angleDeg > 0 && angleDeg < 90) {
        // intersection is in the top right part of the rectangle
        // first compute intersection with right vertical side:
        y = a * horizontalSideLength + b;
        if (y >= 0) {
        	intersectionSide = 'right'
            intersection_x = horizontalSideLength;
            intersection_y = y;
        } else {
            // if not right vertical angle then it must be top horizontal side
            x = (0 - b) / a;
            intersectionSide = 'top'
            intersection_x = x;
            intersection_y = verticalSideLength;
        }

    } else if (angleDeg > 90 && angleDeg < 180) {
        // intersection is in the bottom right part of the rectangle
        // first compute intersection with right vertical side:
        y = a * horizontalSideLength + b;

        if (y <= verticalSideLength) {
        	intersectionSide = 'right'
            intersection_x = horizontalSideLength;
            intersection_y = y;
        } else {
            // if not right vertical angle then it must be bottom horizontal side
            x = (verticalSideLength - b) / a;
            intersectionSide = 'bottom'
            intersection_x = x;
            intersection_y = verticalSideLength;
        }
    } else if (angleDeg > 180 && angleDeg < 270) {
        // intersection is in the bottom left part of the rectangle
        // first compute intersection with left vertical side:
        y = a * 0 + b;
        if (y <= verticalSideLength) {
        	intersectionSide = 'left'
            intersection_x = 0;
            intersection_y = y;
        } else {
            // if not left vertical angle then it must be bottom horizontal side
            x = (verticalSideLength - b) / a;
            intersectionSide = 'bottom'
            intersection_x = x;
            intersection_y = verticalSideLength;
        }

    } else if (angleDeg > 270 && angleDeg < 360) {
        // intersection is in the top left part of the rectangle
        // first compute intersection with left vertical side:
        y = a * 0 + b;
        if (y >= 0) {
        	intersectionSide = 'left'
            intersection_x = 0;
            intersection_y = y;
        } else {
            // if not left vertical angle then it must be top horizontal side
            x = (0 - b) / a;
            intersectionSide = 'top'
            intersection_x = x;
            intersection_y = 0;
        }
    } else if (angleDeg == 90) {
    	intersectionSide = 'right'
        intersection_x = horizontalSideLength;
        intersection_y = y0;
    } else if (angleDeg == 270) {
    	intersectionSide = 'left'
        intersection_x = 0;
        intersection_y = y0;
    } else if (angleDeg == 0) {
    	intersectionSide = 'top'
        intersection_x = x0;
        intersection_y = 0;
    } else if (angleDeg == 180) {
    	intersectionSide = 'bottom'
        intersection_x = x0;
        intersection_y = verticalSideLength;
    }

    console.log('intersection side: ' + intersectionSide);
    console.log('intersection point: (' + intersection_x + ',' + intersection_y + ')');





}
