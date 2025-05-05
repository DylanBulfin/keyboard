function boardl_xl_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[-14,64.5],[40,72]]).appendPoint([68,72]).appendPoint([86,69.5]).appendPoint([137.6,69.5]).appendPoint([137.6,-11]).appendPoint([137.118053,-64.7164209]).appendPoint([136.8947212,-91.4498436]).appendPoint([127.5414889,-116.4946596]).appendPoint([102.1697881,-107.2601158]).appendPoint([55.8684411,-27.0638302]).appendPoint([54.4,-13.5]).appendPoint([-14,-13.5]).appendPoint([-14,64.5]).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function boardl_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[-10.2751368,62.7395643],[41.8630883,69.9809845]]).appendArc([42.1382251,70],{"radius":2,"clockwise":true,"large":false}).appendPoint([65.8617749,70]).appendArc([66.1369117,69.9809845],{"radius":2,"clockwise":true,"large":false}).appendPoint([83.8630883,67.5190155]).appendArc([84.1382251,67.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([133.6,67.5]).appendArc([135.6,65.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.6,-8.9808264]).appendArc([135.5996325,-9.0191668],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.5552465,-63.4887923]).appendArc([134.555051,-63.5533633],{"radius":2,"clockwise":false,"large":false}).appendPoint([134.890096,-89.0972201]).appendArc([134.778463,-89.7827833],{"radius":2,"clockwise":true,"large":false}).appendPoint([127.0141814,-112.0181102]).appendArc([124.4419462,-113.2381629],{"radius":2,"clockwise":true,"large":false}).appendPoint([105.417254,-106.3137411]).appendArc([104.3692434,-105.4343559],{"radius":2,"clockwise":true,"large":false}).appendPoint([58.3861022,-25.789219]).appendArc([58.1343534,-25.0432648],{"radius":2,"clockwise":true,"large":false}).appendPoint([56.6235873,-13.2459542]).appendArc([54.6397877,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-10,-11.5]).appendArc([-12,-9.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([-12,60.7585798]).appendArc([-10.2751368,62.7395643],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
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
            
            
        
            function main() {
                return walll_case_fn();
            }

        