function boardr_extrude_1_outline_fn(){
    return new CSG.Path2D([[282.1369117,69.9809845],[334.2751368,62.7395643]]).appendArc([336,60.7585798],{"radius":2,"clockwise":true,"large":false}).appendPoint([336,-9.5]).appendArc([334,-11.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([269.3602123,-11.5]).appendArc([267.3764127,-13.2459542],{"radius":2,"clockwise":false,"large":false}).appendPoint([265.8656466,-25.0432648]).appendArc([265.6138978,-25.789219],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.6307566,-105.4343559]).appendArc([218.582746,-106.3137412],{"radius":2,"clockwise":true,"large":false}).appendPoint([199.5580538,-113.2381628]).appendArc([196.9858186,-112.0181102],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.2215369,-89.7827833]).appendArc([189.109904,-89.0972201],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.444949,-63.5533633]).appendArc([189.4447535,-63.4887923],{"radius":2,"clockwise":false,"large":false}).appendPoint([188.4003675,-9.0191668]).appendArc([188.4,-8.9808264],{"radius":2,"clockwise":true,"large":false}).appendPoint([188.4,65.5]).appendArc([190.4,67.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([239.8617749,67.5]).appendArc([240.1369117,67.5190155],{"radius":2,"clockwise":false,"large":false}).appendPoint([257.8630883,69.9809845]).appendArc([258.1382251,70],{"radius":2,"clockwise":true,"large":false}).appendPoint([281.8617749,70]).appendArc([282.1369117,69.9809845],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottomr_case_fn() {
                    

                // creating part 0 of case bottomr
                let bottomr__part_0 = boardr_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottomr__part_0_bounds = bottomr__part_0.getBounds();
                let bottomr__part_0_x = bottomr__part_0_bounds[0].x + (bottomr__part_0_bounds[1].x - bottomr__part_0_bounds[0].x) / 2
                let bottomr__part_0_y = bottomr__part_0_bounds[0].y + (bottomr__part_0_bounds[1].y - bottomr__part_0_bounds[0].y) / 2
                bottomr__part_0 = translate([-bottomr__part_0_x, -bottomr__part_0_y, 0], bottomr__part_0);
                bottomr__part_0 = rotate([0,0,0], bottomr__part_0);
                bottomr__part_0 = translate([bottomr__part_0_x, bottomr__part_0_y, 0], bottomr__part_0);

                bottomr__part_0 = translate([0,0,0], bottomr__part_0);
                let result = bottomr__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottomr_case_fn();
            }

        