function boardl_extrude_1_outline_fn(){
    return new CSG.Path2D([[-10.2751368,62.7395643],[41.8630883,69.9809845]]).appendArc([42.1382251,70],{"radius":2,"clockwise":true,"large":false}).appendPoint([65.8617749,70]).appendArc([66.1369117,69.9809845],{"radius":2,"clockwise":true,"large":false}).appendPoint([83.8630883,67.5190155]).appendArc([84.1382251,67.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([133.6,67.5]).appendArc([135.6,65.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.6,-8.9808264]).appendArc([135.5996325,-9.0191668],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.5552465,-63.4887923]).appendArc([134.555051,-63.5533633],{"radius":2,"clockwise":false,"large":false}).appendPoint([134.890096,-89.0972201]).appendArc([134.778463,-89.7827833],{"radius":2,"clockwise":true,"large":false}).appendPoint([127.0141814,-112.0181102]).appendArc([124.4419462,-113.2381629],{"radius":2,"clockwise":true,"large":false}).appendPoint([105.417254,-106.3137411]).appendArc([104.3692434,-105.4343559],{"radius":2,"clockwise":true,"large":false}).appendPoint([58.3861022,-25.789219]).appendArc([58.1343534,-25.0432648],{"radius":2,"clockwise":true,"large":false}).appendPoint([56.6235873,-13.2459542]).appendArc([54.6397877,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-10,-11.5]).appendArc([-12,-9.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([-12,60.7585798]).appendArc([-10.2751368,62.7395643],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottoml_case_fn() {
                    

                // creating part 0 of case bottoml
                let bottoml__part_0 = boardl_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottoml__part_0_bounds = bottoml__part_0.getBounds();
                let bottoml__part_0_x = bottoml__part_0_bounds[0].x + (bottoml__part_0_bounds[1].x - bottoml__part_0_bounds[0].x) / 2
                let bottoml__part_0_y = bottoml__part_0_bounds[0].y + (bottoml__part_0_bounds[1].y - bottoml__part_0_bounds[0].y) / 2
                bottoml__part_0 = translate([-bottoml__part_0_x, -bottoml__part_0_y, 0], bottoml__part_0);
                bottoml__part_0 = rotate([0,0,0], bottoml__part_0);
                bottoml__part_0 = translate([bottoml__part_0_x, bottoml__part_0_y, 0], bottoml__part_0);

                bottoml__part_0 = translate([0,0,0], bottoml__part_0);
                let result = bottoml__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottoml_case_fn();
            }

        