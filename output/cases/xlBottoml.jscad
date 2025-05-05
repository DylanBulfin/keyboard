function boardl_xl_extrude_1_outline_fn(){
    return new CSG.Path2D([[-14,64.5],[40,72]]).appendPoint([68,72]).appendPoint([86,69.5]).appendPoint([137.6,69.5]).appendPoint([137.6,-11]).appendPoint([137.118053,-64.7164209]).appendPoint([136.8947212,-91.4498436]).appendPoint([127.5414889,-116.4946596]).appendPoint([102.1697881,-107.2601158]).appendPoint([55.8684411,-27.0638302]).appendPoint([54.4,-13.5]).appendPoint([-14,-13.5]).appendPoint([-14,64.5]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
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
            
            
        
            function main() {
                return xlBottoml_case_fn();
            }

        