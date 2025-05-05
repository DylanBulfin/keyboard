function board_xl_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[284.1369117,71.9809845],[336.2751368,64.7395643]]).appendArc([338,62.7585798],{"radius":2,"clockwise":true,"large":false}).appendPoint([338,-11.5]).appendArc([336,-13.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([271.3951634,-13.5]).appendArc([269.4067819,-15.2847348],{"radius":2,"clockwise":false,"large":false}).appendPoint([268.1769639,-26.6444295]).appendArc([267.9206332,-27.4291643],{"radius":2,"clockwise":true,"large":false}).appendPoint([222.1941821,-106.6297009]).appendArc([221.1461715,-107.5090862],{"radius":2,"clockwise":true,"large":false}).appendPoint([198.3222614,-115.81631]).appendArc([195.7646159,-114.6366411],{"radius":2,"clockwise":true,"large":false}).appendPoint([187.2286577,-91.7802107]).appendArc([187.1023328,-91.0972018],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.8819523,-64.7170497]).appendArc([186.8819416,-64.7158137],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.4000805,-11.0089723]).appendArc([186.4,-10.9910289],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.4,67.5]).appendArc([188.4,69.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([237.8617749,69.5]).appendArc([238.1369117,69.5190155],{"radius":2,"clockwise":false,"large":false}).appendPoint([255.8630883,71.9809845]).appendArc([256.1382251,72],{"radius":2,"clockwise":true,"large":false}).appendPoint([283.8617749,72]).appendArc([284.1369117,71.9809845],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[-14,64.5],[40,72]]).appendPoint([68,72]).appendPoint([86,69.5]).appendPoint([137.6,69.5]).appendPoint([137.6,-11]).appendPoint([137.118053,-64.7164209]).appendPoint([136.8947212,-91.4498436]).appendPoint([127.5414889,-116.4946596]).appendPoint([102.1697881,-107.2601158]).appendPoint([55.8684411,-27.0638302]).appendPoint([54.4,-13.5]).appendPoint([-14,-13.5]).appendPoint([-14,64.5]).close().innerToCAG()
).extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[-10.2751368,62.7395643],[41.8630883,69.9809845]]).appendArc([42.1382251,70],{"radius":2,"clockwise":true,"large":false}).appendPoint([65.8617749,70]).appendArc([66.1369117,69.9809845],{"radius":2,"clockwise":true,"large":false}).appendPoint([83.8630883,67.5190155]).appendArc([84.1382251,67.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([133.6,67.5]).appendArc([135.6,65.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.6,-8.9808264]).appendArc([135.5996325,-9.0191668],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.5552465,-63.4887923]).appendArc([134.555051,-63.5533633],{"radius":2,"clockwise":false,"large":false}).appendPoint([134.890096,-89.0972201]).appendArc([134.778463,-89.7827833],{"radius":2,"clockwise":true,"large":false}).appendPoint([127.0141814,-112.0181102]).appendArc([124.4419462,-113.2381629],{"radius":2,"clockwise":true,"large":false}).appendPoint([105.417254,-106.3137411]).appendArc([104.3692434,-105.4343559],{"radius":2,"clockwise":true,"large":false}).appendPoint([58.3861022,-25.789219]).appendArc([58.1343534,-25.0432648],{"radius":2,"clockwise":true,"large":false}).appendPoint([56.6235873,-13.2459542]).appendArc([54.6397877,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-10,-11.5]).appendArc([-12,-9.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([-12,60.7585798]).appendArc([-10.2751368,62.7395643],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[282.1369117,69.9809845],[334.2751368,62.7395643]]).appendArc([336,60.7585798],{"radius":2,"clockwise":true,"large":false}).appendPoint([336,-9.5]).appendArc([334,-11.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([269.3602123,-11.5]).appendArc([267.3764127,-13.2459542],{"radius":2,"clockwise":false,"large":false}).appendPoint([265.8656466,-25.0432648]).appendArc([265.6138978,-25.789219],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.6307566,-105.4343559]).appendArc([218.582746,-106.3137412],{"radius":2,"clockwise":true,"large":false}).appendPoint([199.5580538,-113.2381628]).appendArc([196.9858186,-112.0181102],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.2215369,-89.7827833]).appendArc([189.109904,-89.0972201],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.444949,-63.5533633]).appendArc([189.4447535,-63.4887923],{"radius":2,"clockwise":false,"large":false}).appendPoint([188.4003675,-9.0191668]).appendArc([188.4,-8.9808264],{"radius":2,"clockwise":true,"large":false}).appendPoint([188.4,65.5]).appendArc([190.4,67.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([239.8617749,67.5]).appendArc([240.1369117,67.5190155],{"radius":2,"clockwise":false,"large":false}).appendPoint([257.8630883,69.9809845]).appendArc([258.1382251,70],{"radius":2,"clockwise":true,"large":false}).appendPoint([281.8617749,70]).appendArc([282.1369117,69.9809845],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5.6] });
}




                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = board_xl_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        