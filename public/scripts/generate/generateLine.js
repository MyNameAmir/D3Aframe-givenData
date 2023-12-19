import { Axis } from "../axis.js";
import { Options } from "../options.js"

/**
 * generates lines based on the Axis that is passed onto it, so far only has the X and Z axis
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {number} length 
 * @param {Axis} axis 
 * @param {svg} svg1 
 */
export function generateLine(location, length, axis, svg1){
    if(axis == Axis.X)
        svg1.append("a-entity").attr("line", `start: ${location.x} ${location.y} ${location.z}; end: ${length} ${location.y} ${location.z}; color: ${Options.chart.lineColour}`)
    else if(axis == Axis.Z){
        svg1.append("a-entity").attr("line", `start: ${location.x} ${location.y} ${location.z}; end: ${location.x} ${location.y} ${-length}; color: ${Options.chart.lineColour}`);
    }
}