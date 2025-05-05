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
            
            
        
            function main() {
                return mountingr_case_fn();
            }

        