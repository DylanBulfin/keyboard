function standoffs_extrude_4_outline_fn(){
    return CAG.circle({"center":[222,-66.5],"radius":2.5})
.union(
    CAG.circle({"center":[102,-66.5],"radius":2.5})
).union(
    CAG.circle({"center":[210,2.5],"radius":2.5})
).union(
    CAG.circle({"center":[114,2.5],"radius":2.5})
).union(
    CAG.circle({"center":[193.2,62.7],"radius":2.5})
).union(
    CAG.circle({"center":[130.8,62.7],"radius":2.5})
).union(
    CAG.circle({"center":[315,8.5],"radius":2.5})
).union(
    CAG.circle({"center":[9,8.5],"radius":2.5})
).union(
    CAG.circle({"center":[315,42.5],"radius":2.5})
).union(
    CAG.circle({"center":[9,42.5],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[222,-66.5],"radius":1.5})
.union(
    CAG.circle({"center":[102,-66.5],"radius":1.5})
).union(
    CAG.circle({"center":[210,2.5],"radius":1.5})
).union(
    CAG.circle({"center":[114,2.5],"radius":1.5})
).union(
    CAG.circle({"center":[193.2,62.7],"radius":1.5})
).union(
    CAG.circle({"center":[130.8,62.7],"radius":1.5})
).union(
    CAG.circle({"center":[315,8.5],"radius":1.5})
).union(
    CAG.circle({"center":[9,8.5],"radius":1.5})
).union(
    CAG.circle({"center":[315,42.5],"radius":1.5})
).union(
    CAG.circle({"center":[9,42.5],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function bare_standoffs_extrude_4_outline_fn(){
    return CAG.circle({"center":[258,7.5],"radius":1.5})
.union(
    CAG.circle({"center":[66,7.5],"radius":1.5})
).union(
    CAG.circle({"center":[258,58.5],"radius":1.5})
).union(
    CAG.circle({"center":[66,58.5],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoffs_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function _bare_standoffs_case_fn() {
                    

                // creating part 0 of case _bare_standoffs
                let _bare_standoffs__part_0 = bare_standoffs_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _bare_standoffs__part_0_bounds = _bare_standoffs__part_0.getBounds();
                let _bare_standoffs__part_0_x = _bare_standoffs__part_0_bounds[0].x + (_bare_standoffs__part_0_bounds[1].x - _bare_standoffs__part_0_bounds[0].x) / 2
                let _bare_standoffs__part_0_y = _bare_standoffs__part_0_bounds[0].y + (_bare_standoffs__part_0_bounds[1].y - _bare_standoffs__part_0_bounds[0].y) / 2
                _bare_standoffs__part_0 = translate([-_bare_standoffs__part_0_x, -_bare_standoffs__part_0_y, 0], _bare_standoffs__part_0);
                _bare_standoffs__part_0 = rotate([0,0,0], _bare_standoffs__part_0);
                _bare_standoffs__part_0 = translate([_bare_standoffs__part_0_x, _bare_standoffs__part_0_y, 0], _bare_standoffs__part_0);

                _bare_standoffs__part_0 = translate([0,0,0], _bare_standoffs__part_0);
                let result = _bare_standoffs__part_0;
                
            
                    return result;
                }
            
            

                function mounting_case_fn() {
                    

                // creating part 0 of case mounting
                let mounting__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let mounting__part_0_bounds = mounting__part_0.getBounds();
                let mounting__part_0_x = mounting__part_0_bounds[0].x + (mounting__part_0_bounds[1].x - mounting__part_0_bounds[0].x) / 2
                let mounting__part_0_y = mounting__part_0_bounds[0].y + (mounting__part_0_bounds[1].y - mounting__part_0_bounds[0].y) / 2
                mounting__part_0 = translate([-mounting__part_0_x, -mounting__part_0_y, 0], mounting__part_0);
                mounting__part_0 = rotate([0,0,0], mounting__part_0);
                mounting__part_0 = translate([mounting__part_0_x, mounting__part_0_y, 0], mounting__part_0);

                mounting__part_0 = translate([0,0,0], mounting__part_0);
                let result = mounting__part_0;
                
            

                // creating part 1 of case mounting
                let mounting__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let mounting__part_1_bounds = mounting__part_1.getBounds();
                let mounting__part_1_x = mounting__part_1_bounds[0].x + (mounting__part_1_bounds[1].x - mounting__part_1_bounds[0].x) / 2
                let mounting__part_1_y = mounting__part_1_bounds[0].y + (mounting__part_1_bounds[1].y - mounting__part_1_bounds[0].y) / 2
                mounting__part_1 = translate([-mounting__part_1_x, -mounting__part_1_y, 0], mounting__part_1);
                mounting__part_1 = rotate([0,0,0], mounting__part_1);
                mounting__part_1 = translate([mounting__part_1_x, mounting__part_1_y, 0], mounting__part_1);

                mounting__part_1 = translate([0,0,0], mounting__part_1);
                result = result.subtract(mounting__part_1);
                
            

                // creating part 2 of case mounting
                let mounting__part_2 = _bare_standoffs_case_fn();

                // make sure that rotations are relative
                let mounting__part_2_bounds = mounting__part_2.getBounds();
                let mounting__part_2_x = mounting__part_2_bounds[0].x + (mounting__part_2_bounds[1].x - mounting__part_2_bounds[0].x) / 2
                let mounting__part_2_y = mounting__part_2_bounds[0].y + (mounting__part_2_bounds[1].y - mounting__part_2_bounds[0].y) / 2
                mounting__part_2 = translate([-mounting__part_2_x, -mounting__part_2_y, 0], mounting__part_2);
                mounting__part_2 = rotate([0,0,0], mounting__part_2);
                mounting__part_2 = translate([mounting__part_2_x, mounting__part_2_y, 0], mounting__part_2);

                mounting__part_2 = translate([0,0,0], mounting__part_2);
                result = result.union(mounting__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return mounting_case_fn();
            }

        