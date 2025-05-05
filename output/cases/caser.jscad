function boardr_xl_extrude_1_outline_fn(){
    return new CSG.Path2D([[284.1369117,71.9809845],[336.2751368,64.7395643]]).appendArc([338,62.7585798],{"radius":2,"clockwise":true,"large":false}).appendPoint([338,-11.5]).appendArc([336,-13.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([271.3951634,-13.5]).appendArc([269.4067819,-15.2847348],{"radius":2,"clockwise":false,"large":false}).appendPoint([268.1769639,-26.6444295]).appendArc([267.9206332,-27.4291643],{"radius":2,"clockwise":true,"large":false}).appendPoint([222.1941821,-106.6297009]).appendArc([221.1461715,-107.5090862],{"radius":2,"clockwise":true,"large":false}).appendPoint([198.3222614,-115.81631]).appendArc([195.7646159,-114.6366411],{"radius":2,"clockwise":true,"large":false}).appendPoint([187.2286577,-91.7802107]).appendArc([187.1023328,-91.0972018],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.8819523,-64.7170497]).appendArc([186.8819416,-64.7158137],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.4000805,-11.0089723]).appendArc([186.4,-10.9910289],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.4,67.5]).appendArc([188.4,69.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([237.8617749,69.5]).appendArc([238.1369117,69.5190155],{"radius":2,"clockwise":false,"large":false}).appendPoint([255.8630883,71.9809845]).appendArc([256.1382251,72],{"radius":2,"clockwise":true,"large":false}).appendPoint([283.8617749,72]).appendArc([284.1369117,71.9809845],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function standoffsr_extrude_4_outline_fn(){
    return CAG.circle({"center":[222,-66.5],"radius":2.5})
.union(
    CAG.circle({"center":[210,2.5],"radius":2.5})
).union(
    CAG.circle({"center":[193.2,62.7],"radius":2.5})
).union(
    CAG.circle({"center":[315,8.5],"radius":2.5})
).union(
    CAG.circle({"center":[315,42.5],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mountingr_extrude_4_outline_fn(){
    return CAG.circle({"center":[222,-66.5],"radius":1.5})
.union(
    CAG.circle({"center":[210,2.5],"radius":1.5})
).union(
    CAG.circle({"center":[193.2,62.7],"radius":1.5})
).union(
    CAG.circle({"center":[315,8.5],"radius":1.5})
).union(
    CAG.circle({"center":[315,42.5],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function bare_standoffsr_extrude_4_outline_fn(){
    return CAG.circle({"center":[211.0583029,-83.5121479],"radius":1.5})
.union(
    CAG.circle({"center":[210.9180297,-35.5876351],"radius":1.5})
).union(
    CAG.circle({"center":[258,7.5],"radius":1.5})
).union(
    CAG.circle({"center":[258,58.5],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function boardr_xl_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[284.1369117,71.9809845],[336.2751368,64.7395643]]).appendArc([338,62.7585798],{"radius":2,"clockwise":true,"large":false}).appendPoint([338,-11.5]).appendArc([336,-13.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([271.3951634,-13.5]).appendArc([269.4067819,-15.2847348],{"radius":2,"clockwise":false,"large":false}).appendPoint([268.1769639,-26.6444295]).appendArc([267.9206332,-27.4291643],{"radius":2,"clockwise":true,"large":false}).appendPoint([222.1941821,-106.6297009]).appendArc([221.1461715,-107.5090862],{"radius":2,"clockwise":true,"large":false}).appendPoint([198.3222614,-115.81631]).appendArc([195.7646159,-114.6366411],{"radius":2,"clockwise":true,"large":false}).appendPoint([187.2286577,-91.7802107]).appendArc([187.1023328,-91.0972018],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.8819523,-64.7170497]).appendArc([186.8819416,-64.7158137],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.4000805,-11.0089723]).appendArc([186.4,-10.9910289],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.4,67.5]).appendArc([188.4,69.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([237.8617749,69.5]).appendArc([238.1369117,69.5190155],{"radius":2,"clockwise":false,"large":false}).appendPoint([255.8630883,71.9809845]).appendArc([256.1382251,72],{"radius":2,"clockwise":true,"large":false}).appendPoint([283.8617749,72]).appendArc([284.1369117,71.9809845],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function boardr_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[282.1369117,69.9809845],[334.2751368,62.7395643]]).appendArc([336,60.7585798],{"radius":2,"clockwise":true,"large":false}).appendPoint([336,-9.5]).appendArc([334,-11.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([269.3602123,-11.5]).appendArc([267.3764127,-13.2459542],{"radius":2,"clockwise":false,"large":false}).appendPoint([265.8656466,-25.0432648]).appendArc([265.6138978,-25.789219],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.6307566,-105.4343559]).appendArc([218.582746,-106.3137412],{"radius":2,"clockwise":true,"large":false}).appendPoint([199.5580538,-113.2381628]).appendArc([196.9858186,-112.0181102],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.2215369,-89.7827833]).appendArc([189.109904,-89.0972201],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.444949,-63.5533633]).appendArc([189.4447535,-63.4887923],{"radius":2,"clockwise":false,"large":false}).appendPoint([188.4003675,-9.0191668]).appendArc([188.4,-8.9808264],{"radius":2,"clockwise":true,"large":false}).appendPoint([188.4,65.5]).appendArc([190.4,67.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([239.8617749,67.5]).appendArc([240.1369117,67.5190155],{"radius":2,"clockwise":false,"large":false}).appendPoint([257.8630883,69.9809845]).appendArc([258.1382251,70],{"radius":2,"clockwise":true,"large":false}).appendPoint([281.8617749,70]).appendArc([282.1369117,69.9809845],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
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
            
            

                function mountingr_case_fn() {
                    

                // creating part 0 of case mountingr
                let mountingr__part_0 = _standoffsr_case_fn();

                // make sure that rotations are relative
                let mountingr__part_0_bounds = mountingr__part_0.getBounds();
                let mountingr__part_0_x = mountingr__part_0_bounds[0].x + (mountingr__part_0_bounds[1].x - mountingr__part_0_bounds[0].x) / 2
                let mountingr__part_0_y = mountingr__part_0_bounds[0].y + (mountingr__part_0_bounds[1].y - mountingr__part_0_bounds[0].y) / 2
                mountingr__part_0 = translate([-mountingr__part_0_x, -mountingr__part_0_y, 0], mountingr__part_0);
                mountingr__part_0 = rotate([0,0,0], mountingr__part_0);
                mountingr__part_0 = translate([mountingr__part_0_x, mountingr__part_0_y, 0], mountingr__part_0);

                mountingr__part_0 = translate([0,0,0], mountingr__part_0);
                let result = mountingr__part_0;
                
            

                // creating part 1 of case mountingr
                let mountingr__part_1 = _holesr_case_fn();

                // make sure that rotations are relative
                let mountingr__part_1_bounds = mountingr__part_1.getBounds();
                let mountingr__part_1_x = mountingr__part_1_bounds[0].x + (mountingr__part_1_bounds[1].x - mountingr__part_1_bounds[0].x) / 2
                let mountingr__part_1_y = mountingr__part_1_bounds[0].y + (mountingr__part_1_bounds[1].y - mountingr__part_1_bounds[0].y) / 2
                mountingr__part_1 = translate([-mountingr__part_1_x, -mountingr__part_1_y, 0], mountingr__part_1);
                mountingr__part_1 = rotate([0,0,0], mountingr__part_1);
                mountingr__part_1 = translate([mountingr__part_1_x, mountingr__part_1_y, 0], mountingr__part_1);

                mountingr__part_1 = translate([0,0,0], mountingr__part_1);
                result = result.subtract(mountingr__part_1);
                
            

                // creating part 2 of case mountingr
                let mountingr__part_2 = _bare_standoffsr_case_fn();

                // make sure that rotations are relative
                let mountingr__part_2_bounds = mountingr__part_2.getBounds();
                let mountingr__part_2_x = mountingr__part_2_bounds[0].x + (mountingr__part_2_bounds[1].x - mountingr__part_2_bounds[0].x) / 2
                let mountingr__part_2_y = mountingr__part_2_bounds[0].y + (mountingr__part_2_bounds[1].y - mountingr__part_2_bounds[0].y) / 2
                mountingr__part_2 = translate([-mountingr__part_2_x, -mountingr__part_2_y, 0], mountingr__part_2);
                mountingr__part_2 = rotate([0,0,0], mountingr__part_2);
                mountingr__part_2 = translate([mountingr__part_2_x, mountingr__part_2_y, 0], mountingr__part_2);

                mountingr__part_2 = translate([0,0,0], mountingr__part_2);
                result = result.union(mountingr__part_2);
                
            
                    return result;
                }
            
            

                function _standoffsr_case_fn() {
                    

                // creating part 0 of case _standoffsr
                let _standoffsr__part_0 = standoffsr_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffsr__part_0_bounds = _standoffsr__part_0.getBounds();
                let _standoffsr__part_0_x = _standoffsr__part_0_bounds[0].x + (_standoffsr__part_0_bounds[1].x - _standoffsr__part_0_bounds[0].x) / 2
                let _standoffsr__part_0_y = _standoffsr__part_0_bounds[0].y + (_standoffsr__part_0_bounds[1].y - _standoffsr__part_0_bounds[0].y) / 2
                _standoffsr__part_0 = translate([-_standoffsr__part_0_x, -_standoffsr__part_0_y, 0], _standoffsr__part_0);
                _standoffsr__part_0 = rotate([0,0,0], _standoffsr__part_0);
                _standoffsr__part_0 = translate([_standoffsr__part_0_x, _standoffsr__part_0_y, 0], _standoffsr__part_0);

                _standoffsr__part_0 = translate([0,0,0], _standoffsr__part_0);
                let result = _standoffsr__part_0;
                
            
                    return result;
                }
            
            

                function _holesr_case_fn() {
                    

                // creating part 0 of case _holesr
                let _holesr__part_0 = mountingr_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holesr__part_0_bounds = _holesr__part_0.getBounds();
                let _holesr__part_0_x = _holesr__part_0_bounds[0].x + (_holesr__part_0_bounds[1].x - _holesr__part_0_bounds[0].x) / 2
                let _holesr__part_0_y = _holesr__part_0_bounds[0].y + (_holesr__part_0_bounds[1].y - _holesr__part_0_bounds[0].y) / 2
                _holesr__part_0 = translate([-_holesr__part_0_x, -_holesr__part_0_y, 0], _holesr__part_0);
                _holesr__part_0 = rotate([0,0,0], _holesr__part_0);
                _holesr__part_0 = translate([_holesr__part_0_x, _holesr__part_0_y, 0], _holesr__part_0);

                _holesr__part_0 = translate([0,0,0], _holesr__part_0);
                let result = _holesr__part_0;
                
            
                    return result;
                }
            
            

                function _bare_standoffsr_case_fn() {
                    

                // creating part 0 of case _bare_standoffsr
                let _bare_standoffsr__part_0 = bare_standoffsr_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _bare_standoffsr__part_0_bounds = _bare_standoffsr__part_0.getBounds();
                let _bare_standoffsr__part_0_x = _bare_standoffsr__part_0_bounds[0].x + (_bare_standoffsr__part_0_bounds[1].x - _bare_standoffsr__part_0_bounds[0].x) / 2
                let _bare_standoffsr__part_0_y = _bare_standoffsr__part_0_bounds[0].y + (_bare_standoffsr__part_0_bounds[1].y - _bare_standoffsr__part_0_bounds[0].y) / 2
                _bare_standoffsr__part_0 = translate([-_bare_standoffsr__part_0_x, -_bare_standoffsr__part_0_y, 0], _bare_standoffsr__part_0);
                _bare_standoffsr__part_0 = rotate([0,0,0], _bare_standoffsr__part_0);
                _bare_standoffsr__part_0 = translate([_bare_standoffsr__part_0_x, _bare_standoffsr__part_0_y, 0], _bare_standoffsr__part_0);

                _bare_standoffsr__part_0 = translate([0,0,0], _bare_standoffsr__part_0);
                let result = _bare_standoffsr__part_0;
                
            
                    return result;
                }
            
            

                function wallr_case_fn() {
                    

                // creating part 0 of case wallr
                let wallr__part_0 = _outerWallr_case_fn();

                // make sure that rotations are relative
                let wallr__part_0_bounds = wallr__part_0.getBounds();
                let wallr__part_0_x = wallr__part_0_bounds[0].x + (wallr__part_0_bounds[1].x - wallr__part_0_bounds[0].x) / 2
                let wallr__part_0_y = wallr__part_0_bounds[0].y + (wallr__part_0_bounds[1].y - wallr__part_0_bounds[0].y) / 2
                wallr__part_0 = translate([-wallr__part_0_x, -wallr__part_0_y, 0], wallr__part_0);
                wallr__part_0 = rotate([0,0,0], wallr__part_0);
                wallr__part_0 = translate([wallr__part_0_x, wallr__part_0_y, 0], wallr__part_0);

                wallr__part_0 = translate([0,0,0], wallr__part_0);
                let result = wallr__part_0;
                
            

                // creating part 1 of case wallr
                let wallr__part_1 = _innerWallr_case_fn();

                // make sure that rotations are relative
                let wallr__part_1_bounds = wallr__part_1.getBounds();
                let wallr__part_1_x = wallr__part_1_bounds[0].x + (wallr__part_1_bounds[1].x - wallr__part_1_bounds[0].x) / 2
                let wallr__part_1_y = wallr__part_1_bounds[0].y + (wallr__part_1_bounds[1].y - wallr__part_1_bounds[0].y) / 2
                wallr__part_1 = translate([-wallr__part_1_x, -wallr__part_1_y, 0], wallr__part_1);
                wallr__part_1 = rotate([0,0,0], wallr__part_1);
                wallr__part_1 = translate([wallr__part_1_x, wallr__part_1_y, 0], wallr__part_1);

                wallr__part_1 = translate([0,0,0], wallr__part_1);
                result = result.subtract(wallr__part_1);
                
            
                    return result;
                }
            
            

                function _outerWallr_case_fn() {
                    

                // creating part 0 of case _outerWallr
                let _outerWallr__part_0 = boardr_xl_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outerWallr__part_0_bounds = _outerWallr__part_0.getBounds();
                let _outerWallr__part_0_x = _outerWallr__part_0_bounds[0].x + (_outerWallr__part_0_bounds[1].x - _outerWallr__part_0_bounds[0].x) / 2
                let _outerWallr__part_0_y = _outerWallr__part_0_bounds[0].y + (_outerWallr__part_0_bounds[1].y - _outerWallr__part_0_bounds[0].y) / 2
                _outerWallr__part_0 = translate([-_outerWallr__part_0_x, -_outerWallr__part_0_y, 0], _outerWallr__part_0);
                _outerWallr__part_0 = rotate([0,0,0], _outerWallr__part_0);
                _outerWallr__part_0 = translate([_outerWallr__part_0_x, _outerWallr__part_0_y, 0], _outerWallr__part_0);

                _outerWallr__part_0 = translate([0,0,0], _outerWallr__part_0);
                let result = _outerWallr__part_0;
                
            
                    return result;
                }
            
            

                function _innerWallr_case_fn() {
                    

                // creating part 0 of case _innerWallr
                let _innerWallr__part_0 = boardr_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _innerWallr__part_0_bounds = _innerWallr__part_0.getBounds();
                let _innerWallr__part_0_x = _innerWallr__part_0_bounds[0].x + (_innerWallr__part_0_bounds[1].x - _innerWallr__part_0_bounds[0].x) / 2
                let _innerWallr__part_0_y = _innerWallr__part_0_bounds[0].y + (_innerWallr__part_0_bounds[1].y - _innerWallr__part_0_bounds[0].y) / 2
                _innerWallr__part_0 = translate([-_innerWallr__part_0_x, -_innerWallr__part_0_y, 0], _innerWallr__part_0);
                _innerWallr__part_0 = rotate([0,0,0], _innerWallr__part_0);
                _innerWallr__part_0 = translate([_innerWallr__part_0_x, _innerWallr__part_0_y, 0], _innerWallr__part_0);

                _innerWallr__part_0 = translate([0,0,0], _innerWallr__part_0);
                let result = _innerWallr__part_0;
                
            
                    return result;
                }
            
            

                function caser_case_fn() {
                    

                // creating part 0 of case caser
                let caser__part_0 = xlBottomr_case_fn();

                // make sure that rotations are relative
                let caser__part_0_bounds = caser__part_0.getBounds();
                let caser__part_0_x = caser__part_0_bounds[0].x + (caser__part_0_bounds[1].x - caser__part_0_bounds[0].x) / 2
                let caser__part_0_y = caser__part_0_bounds[0].y + (caser__part_0_bounds[1].y - caser__part_0_bounds[0].y) / 2
                caser__part_0 = translate([-caser__part_0_x, -caser__part_0_y, 0], caser__part_0);
                caser__part_0 = rotate([0,0,0], caser__part_0);
                caser__part_0 = translate([caser__part_0_x, caser__part_0_y, 0], caser__part_0);

                caser__part_0 = translate([0,0,0], caser__part_0);
                let result = caser__part_0;
                
            

                // creating part 1 of case caser
                let caser__part_1 = mountingr_case_fn();

                // make sure that rotations are relative
                let caser__part_1_bounds = caser__part_1.getBounds();
                let caser__part_1_x = caser__part_1_bounds[0].x + (caser__part_1_bounds[1].x - caser__part_1_bounds[0].x) / 2
                let caser__part_1_y = caser__part_1_bounds[0].y + (caser__part_1_bounds[1].y - caser__part_1_bounds[0].y) / 2
                caser__part_1 = translate([-caser__part_1_x, -caser__part_1_y, 0], caser__part_1);
                caser__part_1 = rotate([0,0,0], caser__part_1);
                caser__part_1 = translate([caser__part_1_x, caser__part_1_y, 0], caser__part_1);

                caser__part_1 = translate([0,0,0], caser__part_1);
                result = result.union(caser__part_1);
                
            

                // creating part 2 of case caser
                let caser__part_2 = wallr_case_fn();

                // make sure that rotations are relative
                let caser__part_2_bounds = caser__part_2.getBounds();
                let caser__part_2_x = caser__part_2_bounds[0].x + (caser__part_2_bounds[1].x - caser__part_2_bounds[0].x) / 2
                let caser__part_2_y = caser__part_2_bounds[0].y + (caser__part_2_bounds[1].y - caser__part_2_bounds[0].y) / 2
                caser__part_2 = translate([-caser__part_2_x, -caser__part_2_y, 0], caser__part_2);
                caser__part_2 = rotate([0,0,0], caser__part_2);
                caser__part_2 = translate([caser__part_2_x, caser__part_2_y, 0], caser__part_2);

                caser__part_2 = translate([0,0,0], caser__part_2);
                result = result.union(caser__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return caser_case_fn();
            }

        