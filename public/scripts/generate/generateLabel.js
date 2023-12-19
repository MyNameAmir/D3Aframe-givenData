/**
 * generates a label as an A-text and appends it with the given location, text content and options to the a-frame
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {string} text 
 * @param {svg} svg1 
 * @param {string} label 
 */
export function generateLabel(location, text, svg1, label) { 
    svg1.append("a-text")
    .attr("value", `${text}`)
    .attr("color", label.textColour)
    .attr("position", `${location.x} ${location.y} ${location.z}`)
    .attr("width", label.textWidth)
    .attr("height", label.textHeight)
    .attr("text")
}