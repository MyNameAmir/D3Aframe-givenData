import { Axis } from "./axis.js";
import { Options } from "./options.js"

export function generateLine(x, y, z, length, axis, svg1){
    if(axis == Axis.X)
        svg1.append("a-entity").attr("line", `start: ${x} ${y} ${z}; end: ${length} ${y} ${z}; color: ${Options.chart.lineColour}`)
}