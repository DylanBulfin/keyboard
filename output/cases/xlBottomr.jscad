function boardr_xl_extrude_1_outline_fn(){
    return new CSG.Path2D([[284.1369117,71.9809845],[336.2751368,64.7395643]]).appendArc([338,62.7585798],{"radius":2,"clockwise":true,"large":false}).appendPoint([338,-11.5]).appendArc([336,-13.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([271.3951634,-13.5]).appendArc([269.4067819,-15.2847348],{"radius":2,"clockwise":false,"large":false}).appendPoint([268.1769639,-26.6444295]).appendArc([267.9206332,-27.4291643],{"radius":2,"clockwise":true,"large":false}).appendPoint([222.1941821,-106.6297009]).appendArc([221.1461715,-107.5090862],{"radius":2,"clockwise":true,"large":false}).appendPoint([198.3222614,-115.81631]).appendArc([195.7646159,-114.6366411],{"radius":2,"clockwise":true,"large":false}).appendPoint([187.2286577,-91.7802107]).appendArc([187.1023328,-91.0972018],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.8819523,-64.7170497]).appendArc([186.8819416,-64.7158137],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.4000805,-11.0089723]).appendArc([186.4,-10.9910289],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.4,67.5]).appendArc([188.4,69.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([237.8617749,69.5]).appendArc([238.1369117,69.5190155],{"radius":2,"clockwise":false,"large":false}).appendPoint([255.8630883,71.9809845]).appendArc([256.1382251,72],{"radius":2,"clockwise":true,"large":false}).appendPoint([283.8617749,72]).appendArc([284.1369117,71.9809845],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottomr_case_fn() {
                    

                // creating part 0 of case xlBottomr
                let xlBottomr__part_0 = boardr_xl_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottomr__part_0_bounds = xlBottomr__part_0.getBounds();
                let xlBottomr__part_0_x = xlBottomr__part_0_bounds[0].x + (xlBottomr__part_0_bounds[1].x - xlBottomr__part_0_bounds[0].x) / 2
                let xlBottomr__part_0_y = xlBottomr__part_0_bounds[0].y + (xlBottomr__part_0_bounds[1].y - xlBottomr__part_0_bounds[0].y) / 2
                xlBottomr__part_0 = translate([-xlBottomr__part_0_x, -xlBottomr__part_0_y, 0], xlBottomr__part_0);
                xlBottomr__part_0 = rotate([0,0,0], xlBottomr__part_0);
                xlBottomr__part_0 = translate([xlBottomr__part_0_x, xlBottomr__part_0_y, 0], xlBottomr__part_0);

                xlBottomr__part_0 = translate([0,0,0], xlBottomr__part_0);
                let result = xlBottomr__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottomr_case_fn();
            }

        