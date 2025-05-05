function board_xl_extrude_1_outline_fn(){
    return new CSG.Path2D([[284.1369117,71.9809845],[336.2751368,64.7395643]]).appendArc([338,62.7585798],{"radius":2,"clockwise":true,"large":false}).appendPoint([338,-11.5]).appendArc([336,-13.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([271.3951634,-13.5]).appendArc([269.4067819,-15.2847348],{"radius":2,"clockwise":false,"large":false}).appendPoint([268.1769639,-26.6444295]).appendArc([267.9206332,-27.4291643],{"radius":2,"clockwise":true,"large":false}).appendPoint([222.1941821,-106.6297009]).appendArc([221.1461715,-107.5090862],{"radius":2,"clockwise":true,"large":false}).appendPoint([198.3222614,-115.81631]).appendArc([195.7646159,-114.6366411],{"radius":2,"clockwise":true,"large":false}).appendPoint([187.2286577,-91.7802107]).appendArc([187.1023328,-91.0972018],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.8819523,-64.7170497]).appendArc([186.8819416,-64.7158137],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.4000805,-11.0089723]).appendArc([186.4,-10.9910289],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.4,67.5]).appendArc([188.4,69.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([237.8617749,69.5]).appendArc([238.1369117,69.5190155],{"radius":2,"clockwise":false,"large":false}).appendPoint([255.8630883,71.9809845]).appendArc([256.1382251,72],{"radius":2,"clockwise":true,"large":false}).appendPoint([283.8617749,72]).appendArc([284.1369117,71.9809845],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[-14,64.5],[40,72]]).appendPoint([68,72]).appendPoint([86,69.5]).appendPoint([137.6,69.5]).appendPoint([137.6,-11]).appendPoint([137.118053,-64.7164209]).appendPoint([136.8947212,-91.4498436]).appendPoint([127.5414889,-116.4946596]).appendPoint([102.1697881,-107.2601158]).appendPoint([55.8684411,-27.0638302]).appendPoint([54.4,-13.5]).appendPoint([-14,-13.5]).appendPoint([-14,64.5]).close().innerToCAG()
).extrude({ offset: [0, 0, 1] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = board_xl_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        