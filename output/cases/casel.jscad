function boardl_xl_extrude_1_outline_fn(){
    return new CSG.Path2D([[-14,64.5],[40,72]]).appendPoint([68,72]).appendPoint([86,69.5]).appendPoint([137.6,69.5]).appendPoint([137.6,-11]).appendPoint([137.118053,-64.7164209]).appendPoint([136.8947212,-91.4498436]).appendPoint([127.5414889,-116.4946596]).appendPoint([102.1697881,-107.2601158]).appendPoint([55.8684411,-27.0638302]).appendPoint([54.4,-13.5]).appendPoint([-14,-13.5]).appendPoint([-14,64.5]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


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


function boardl_xl_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[-14,64.5],[40,72]]).appendPoint([68,72]).appendPoint([86,69.5]).appendPoint([137.6,69.5]).appendPoint([137.6,-11]).appendPoint([137.118053,-64.7164209]).appendPoint([136.8947212,-91.4498436]).appendPoint([127.5414889,-116.4946596]).appendPoint([102.1697881,-107.2601158]).appendPoint([55.8684411,-27.0638302]).appendPoint([54.4,-13.5]).appendPoint([-14,-13.5]).appendPoint([-14,64.5]).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function boardl_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[-10.2751368,62.7395643],[41.8630883,69.9809845]]).appendArc([42.1382251,70],{"radius":2,"clockwise":true,"large":false}).appendPoint([65.8617749,70]).appendArc([66.1369117,69.9809845],{"radius":2,"clockwise":true,"large":false}).appendPoint([83.8630883,67.5190155]).appendArc([84.1382251,67.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([133.6,67.5]).appendArc([135.6,65.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.6,-8.9808264]).appendArc([135.5996325,-9.0191668],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.5552465,-63.4887923]).appendArc([134.555051,-63.5533633],{"radius":2,"clockwise":false,"large":false}).appendPoint([134.890096,-89.0972201]).appendArc([134.778463,-89.7827833],{"radius":2,"clockwise":true,"large":false}).appendPoint([127.0141814,-112.0181102]).appendArc([124.4419462,-113.2381629],{"radius":2,"clockwise":true,"large":false}).appendPoint([105.417254,-106.3137411]).appendArc([104.3692434,-105.4343559],{"radius":2,"clockwise":true,"large":false}).appendPoint([58.3861022,-25.789219]).appendArc([58.1343534,-25.0432648],{"radius":2,"clockwise":true,"large":false}).appendPoint([56.6235873,-13.2459542]).appendArc([54.6397877,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-10,-11.5]).appendArc([-12,-9.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([-12,60.7585798]).appendArc([-10.2751368,62.7395643],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function xlBottoml_case_fn() {
                    

                // creating part 0 of case xlBottoml
                let xlBottoml__part_0 = boardl_xl_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottoml__part_0_bounds = xlBottoml__part_0.getBounds();
                let xlBottoml__part_0_x = xlBottoml__part_0_bounds[0].x + (xlBottoml__part_0_bounds[1].x - xlBottoml__part_0_bounds[0].x) / 2
                let xlBottoml__part_0_y = xlBottoml__part_0_bounds[0].y + (xlBottoml__part_0_bounds[1].y - xlBottoml__part_0_bounds[0].y) / 2
                xlBottoml__part_0 = translate([-xlBottoml__part_0_x, -xlBottoml__part_0_y, 0], xlBottoml__part_0);
                xlBottoml__part_0 = rotate([0,0,0], xlBottoml__part_0);
                xlBottoml__part_0 = translate([xlBottoml__part_0_x, xlBottoml__part_0_y, 0], xlBottoml__part_0);

                xlBottoml__part_0 = translate([0,0,0], xlBottoml__part_0);
                let result = xlBottoml__part_0;
                
            
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
            
            

                function walll_case_fn() {
                    

                // creating part 0 of case walll
                let walll__part_0 = _outerWalll_case_fn();

                // make sure that rotations are relative
                let walll__part_0_bounds = walll__part_0.getBounds();
                let walll__part_0_x = walll__part_0_bounds[0].x + (walll__part_0_bounds[1].x - walll__part_0_bounds[0].x) / 2
                let walll__part_0_y = walll__part_0_bounds[0].y + (walll__part_0_bounds[1].y - walll__part_0_bounds[0].y) / 2
                walll__part_0 = translate([-walll__part_0_x, -walll__part_0_y, 0], walll__part_0);
                walll__part_0 = rotate([0,0,0], walll__part_0);
                walll__part_0 = translate([walll__part_0_x, walll__part_0_y, 0], walll__part_0);

                walll__part_0 = translate([0,0,0], walll__part_0);
                let result = walll__part_0;
                
            

                // creating part 1 of case walll
                let walll__part_1 = _innerWalll_case_fn();

                // make sure that rotations are relative
                let walll__part_1_bounds = walll__part_1.getBounds();
                let walll__part_1_x = walll__part_1_bounds[0].x + (walll__part_1_bounds[1].x - walll__part_1_bounds[0].x) / 2
                let walll__part_1_y = walll__part_1_bounds[0].y + (walll__part_1_bounds[1].y - walll__part_1_bounds[0].y) / 2
                walll__part_1 = translate([-walll__part_1_x, -walll__part_1_y, 0], walll__part_1);
                walll__part_1 = rotate([0,0,0], walll__part_1);
                walll__part_1 = translate([walll__part_1_x, walll__part_1_y, 0], walll__part_1);

                walll__part_1 = translate([0,0,0], walll__part_1);
                result = result.subtract(walll__part_1);
                
            
                    return result;
                }
            
            

                function _outerWalll_case_fn() {
                    

                // creating part 0 of case _outerWalll
                let _outerWalll__part_0 = boardl_xl_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outerWalll__part_0_bounds = _outerWalll__part_0.getBounds();
                let _outerWalll__part_0_x = _outerWalll__part_0_bounds[0].x + (_outerWalll__part_0_bounds[1].x - _outerWalll__part_0_bounds[0].x) / 2
                let _outerWalll__part_0_y = _outerWalll__part_0_bounds[0].y + (_outerWalll__part_0_bounds[1].y - _outerWalll__part_0_bounds[0].y) / 2
                _outerWalll__part_0 = translate([-_outerWalll__part_0_x, -_outerWalll__part_0_y, 0], _outerWalll__part_0);
                _outerWalll__part_0 = rotate([0,0,0], _outerWalll__part_0);
                _outerWalll__part_0 = translate([_outerWalll__part_0_x, _outerWalll__part_0_y, 0], _outerWalll__part_0);

                _outerWalll__part_0 = translate([0,0,0], _outerWalll__part_0);
                let result = _outerWalll__part_0;
                
            
                    return result;
                }
            
            

                function _innerWalll_case_fn() {
                    

                // creating part 0 of case _innerWalll
                let _innerWalll__part_0 = boardl_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _innerWalll__part_0_bounds = _innerWalll__part_0.getBounds();
                let _innerWalll__part_0_x = _innerWalll__part_0_bounds[0].x + (_innerWalll__part_0_bounds[1].x - _innerWalll__part_0_bounds[0].x) / 2
                let _innerWalll__part_0_y = _innerWalll__part_0_bounds[0].y + (_innerWalll__part_0_bounds[1].y - _innerWalll__part_0_bounds[0].y) / 2
                _innerWalll__part_0 = translate([-_innerWalll__part_0_x, -_innerWalll__part_0_y, 0], _innerWalll__part_0);
                _innerWalll__part_0 = rotate([0,0,0], _innerWalll__part_0);
                _innerWalll__part_0 = translate([_innerWalll__part_0_x, _innerWalll__part_0_y, 0], _innerWalll__part_0);

                _innerWalll__part_0 = translate([0,0,0], _innerWalll__part_0);
                let result = _innerWalll__part_0;
                
            
                    return result;
                }
            
            

                function casel_case_fn() {
                    

                // creating part 0 of case casel
                let casel__part_0 = xlBottoml_case_fn();

                // make sure that rotations are relative
                let casel__part_0_bounds = casel__part_0.getBounds();
                let casel__part_0_x = casel__part_0_bounds[0].x + (casel__part_0_bounds[1].x - casel__part_0_bounds[0].x) / 2
                let casel__part_0_y = casel__part_0_bounds[0].y + (casel__part_0_bounds[1].y - casel__part_0_bounds[0].y) / 2
                casel__part_0 = translate([-casel__part_0_x, -casel__part_0_y, 0], casel__part_0);
                casel__part_0 = rotate([0,0,0], casel__part_0);
                casel__part_0 = translate([casel__part_0_x, casel__part_0_y, 0], casel__part_0);

                casel__part_0 = translate([0,0,0], casel__part_0);
                let result = casel__part_0;
                
            

                // creating part 1 of case casel
                let casel__part_1 = mountingl_case_fn();

                // make sure that rotations are relative
                let casel__part_1_bounds = casel__part_1.getBounds();
                let casel__part_1_x = casel__part_1_bounds[0].x + (casel__part_1_bounds[1].x - casel__part_1_bounds[0].x) / 2
                let casel__part_1_y = casel__part_1_bounds[0].y + (casel__part_1_bounds[1].y - casel__part_1_bounds[0].y) / 2
                casel__part_1 = translate([-casel__part_1_x, -casel__part_1_y, 0], casel__part_1);
                casel__part_1 = rotate([0,0,0], casel__part_1);
                casel__part_1 = translate([casel__part_1_x, casel__part_1_y, 0], casel__part_1);

                casel__part_1 = translate([0,0,0], casel__part_1);
                result = result.union(casel__part_1);
                
            

                // creating part 2 of case casel
                let casel__part_2 = walll_case_fn();

                // make sure that rotations are relative
                let casel__part_2_bounds = casel__part_2.getBounds();
                let casel__part_2_x = casel__part_2_bounds[0].x + (casel__part_2_bounds[1].x - casel__part_2_bounds[0].x) / 2
                let casel__part_2_y = casel__part_2_bounds[0].y + (casel__part_2_bounds[1].y - casel__part_2_bounds[0].y) / 2
                casel__part_2 = translate([-casel__part_2_x, -casel__part_2_y, 0], casel__part_2);
                casel__part_2 = rotate([0,0,0], casel__part_2);
                casel__part_2 = translate([casel__part_2_x, casel__part_2_y, 0], casel__part_2);

                casel__part_2 = translate([0,0,0], casel__part_2);
                result = result.union(casel__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return casel_case_fn();
            }

        