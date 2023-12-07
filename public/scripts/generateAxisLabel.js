import { Axis } from "./axis.js";
import { Options } from "./options.js";

export function generateAxisLabel(x, y, z, text, svg1) { 
    svg1.append("a-text")
    .attr("value", `${text}`)
    .attr("color", Options.chart.textColour)
    .attr("position", `${x} ${y} ${z}`)
    .attr("width", 25)
    .attr("height", 10)
    .attr("text")


}