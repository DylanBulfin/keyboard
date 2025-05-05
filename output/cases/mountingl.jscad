function standoffsl_extrude_4_outline_fn(){
    return CAG.circle({"center":[102,-66.5],"radius":2.5})
.union(
    CAG.circle({"center":[114,2.5],"radius":2.5})
).union(
    CAG.circle({"center":[130.8,62.7],"radius":2.5})
).union(
    CAG.circle({"center":[9,8.5],"radius":2.5})
).union(
    CAG.circle({"center":[9,42.5],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mountingl_extrude_4_outline_fn(){
    return CAG.circle({"center":[102,-66.5],"radius":1.5})
.union(
    CAG.circle({"center":[114,2.5],"radius":1.5})
).union(
    CAG.circle({"center":[130.8,62.7],"radius":1.5})
).union(
    CAG.circle({"center":[9,8.5],"radius":1.5})
).union(
    CAG.circle({"center":[9,42.5],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function bare_standoffsl_extrude_4_outline_fn(){
    return CAG.circle({"center":[112.9416971,-83.5121479],"radius":1.5})
.union(
    CAG.circle({"center":[113.0819703,-35.5876351],"radius":1.5})
).union(
    CAG.circle({"center":[66,7.5],"radius":1.5})
).union(
    CAG.circle({"center":[66,58.5],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}




                function _standoffsl_case_fn() {
                    

                // creating part 0 of case _standoffsl
                let _standoffsl__part_0 = standoffsl_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffsl__part_0_bounds = _standoffsl__part_0.getBounds();
                let _standoffsl__part_0_x = _standoffsl__part_0_bounds[0].x + (_standoffsl__part_0_bounds[1].x - _standoffsl__part_0_bounds[0].x) / 2
                let _standoffsl__part_0_y = _standoffsl__part_0_bounds[0].y + (_standoffsl__part_0_bounds[1].y - _standoffsl__part_0_bounds[0].y) / 2
                _standoffsl__part_0 = translate([-_standoffsl__part_0_x, -_standoffsl__part_0_y, 0], _standoffsl__part_0);
                _standoffsl__part_0 = rotate([0,0,0], _standoffsl__part_0);
                _standoffsl__part_0 = translate([_standoffsl__part_0_x, _standoffsl__part_0_y, 0], _standoffsl__part_0);

                _standoffsl__part_0 = translate([0,0,0], _standoffsl__part_0);
                let result = _standoffsl__part_0;
                
            
                    return result;
                }
            
            

                function _holesl_case_fn() {
                    

                // creating part 0 of case _holesl
                let _holesl__part_0 = mountingl_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holesl__part_0_bounds = _holesl__part_0.getBounds();
                let _holesl__part_0_x = _holesl__part_0_bounds[0].x + (_holesl__part_0_bounds[1].x - _holesl__part_0_bounds[0].x) / 2
                let _holesl__part_0_y = _holesl__part_0_bounds[0].y + (_holesl__part_0_bounds[1].y - _holesl__part_0_bounds[0].y) / 2
                _holesl__part_0 = translate([-_holesl__part_0_x, -_holesl__part_0_y, 0], _holesl__part_0);
                _holesl__part_0 = rotate([0,0,0], _holesl__part_0);
                _holesl__part_0 = translate([_holesl__part_0_x, _holesl__part_0_y, 0], _holesl__part_0);

                _holesl__part_0 = translate([0,0,0], _holesl__part_0);
                let result = _holesl__part_0;
                
            
                    return result;
                }
            
            

                function _bare_standoffsl_case_fn() {
                    

                // creating part 0 of case _bare_standoffsl
                let _bare_standoffsl__part_0 = bare_standoffsl_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _bare_standoffsl__part_0_bounds = _bare_standoffsl__part_0.getBounds();
                let _bare_standoffsl__part_0_x = _bare_standoffsl__part_0_bounds[0].x + (_bare_standoffsl__part_0_bounds[1].x - _bare_standoffsl__part_0_bounds[0].x) / 2
                let _bare_standoffsl__part_0_y = _bare_standoffsl__part_0_bounds[0].y + (_bare_standoffsl__part_0_bounds[1].y - _bare_standoffsl__part_0_bounds[0].y) / 2
                _bare_standoffsl__part_0 = translate([-_bare_standoffsl__part_0_x, -_bare_standoffsl__part_0_y, 0], _bare_standoffsl__part_0);
                _bare_standoffsl__part_0 = rotate([0,0,0], _bare_standoffsl__part_0);
                _bare_standoffsl__part_0 = translate([_bare_standoffsl__part_0_x, _bare_standoffsl__part_0_y, 0], _bare_standoffsl__part_0);

                _bare_standoffsl__part_0 = translate([0,0,0], _bare_standoffsl__part_0);
                let result = _bare_standoffsl__part_0;
                
            
                    return result;
                }
            
            

                function mountingl_case_fn() {
                    

                // creating part 0 of case mountingl
                let mountingl__part_0 = _standoffsl_case_fn();

                // make sure that rotations are relative
                let mountingl__part_0_bounds = mountingl__part_0.getBounds();
                let mountingl__part_0_x = mountingl__part_0_bounds[0].x + (mountingl__part_0_bounds[1].x - mountingl__part_0_bounds[0].x) / 2
                let mountingl__part_0_y = mountingl__part_0_bounds[0].y + (mountingl__part_0_bounds[1].y - mountingl__part_0_bounds[0].y) / 2
                mountingl__part_0 = translate([-mountingl__part_0_x, -mountingl__part_0_y, 0], mountingl__part_0);
                mountingl__part_0 = rotate([0,0,0], mountingl__part_0);
                mountingl__part_0 = translate([mountingl__part_0_x, mountingl__part_0_y, 0], mountingl__part_0);

                mountingl__part_0 = translate([0,0,0], mountingl__part_0);
                let result = mountingl__part_0;
                
            

                // creating part 1 of case mountingl
                let mountingl__part_1 = _holesl_case_fn();

                // make sure that rotations are relative
                let mountingl__part_1_bounds = mountingl__part_1.getBounds();
                let mountingl__part_1_x = mountingl__part_1_bounds[0].x + (mountingl__part_1_bounds[1].x - mountingl__part_1_bounds[0].x) / 2
                let mountingl__part_1_y = mountingl__part_1_bounds[0].y + (mountingl__part_1_bounds[1].y - mountingl__part_1_bounds[0].y) / 2
                mountingl__part_1 = translate([-mountingl__part_1_x, -mountingl__part_1_y, 0], mountingl__part_1);
                mountingl__part_1 = rotate([0,0,0], mountingl__part_1);
                mountingl__part_1 = translate([mountingl__part_1_x, mountingl__part_1_y, 0], mountingl__part_1);

                mountingl__part_1 = translate([0,0,0], mountingl__part_1);
                result = result.subtract(mountingl__part_1);
                
            

                // creating part 2 of case mountingl
                let mountingl__part_2 = _bare_standoffsl_case_fn();

                // make sure that rotations are relative
                let mountingl__part_2_bounds = mountingl__part_2.getBounds();
                let mountingl__part_2_x = mountingl__part_2_bounds[0].x + (mountingl__part_2_bounds[1].x - mountingl__part_2_bounds[0].x) / 2
                let mountingl__part_2_y = mountingl__part_2_bounds[0].y + (mountingl__part_2_bounds[1].y - mountingl__part_2_bounds[0].y) / 2
                mountingl__part_2 = translate([-mountingl__part_2_x, -mountingl__part_2_y, 0], mountingl__part_2);
                mountingl__part_2 = rotate([0,0,0], mountingl__part_2);
                mountingl__part_2 = translate([mountingl__part_2_x, mountingl__part_2_y, 0], mountingl__part_2);

                mountingl__part_2 = translate([0,0,0], mountingl__part_2);
                result = result.union(mountingl__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return mountingl_case_fn();
            }

        