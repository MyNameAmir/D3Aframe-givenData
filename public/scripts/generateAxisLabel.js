import { Options } from "./options.js";

export function generateAxisLabel(x, y, z, text, svg1) { 
    svg1.append("a-text")
    .attr("value", `${text}`)
    .attr("color", Options.chart.textColour)
    .attr("position", `${x} ${y} ${z}`)
    .attr("width", Options.chart.textWidth)
    .attr("height", Options.chart.textHeight)
    .attr("text")


}