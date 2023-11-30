
// Declare the chart dimensions and margins.
// make the stuff here be configurable in the options, make some loops to make it more flexible
import { Options } from "./options.js"

//let bottomPlane = svg1.append("a-box")

export class Plane{
    constructor(Options){
        this.position = ``
    }

    render = function(){}
}



export function planes(svg1) {
    
    //bottomPlane.attr("width", )
    //bottom plane //make depth be an option
    svg1.append("a-box").attr("class", "aplane").attr("id", "bottomPlane").attr("position", `${Options.plane.ZXaxisStartingXLocation} -10 -${Options.plane.zAxisDepth/2}`).attr("rotation", `90 0 0`).attr("depth", "0.5").attr("width", `${Options.plane.xAxisDepth}`).attr("height", `${Options.plane.zAxisDepth}`).attr("color", "#7BC8A4")
    //change the position (the -20) based on the number of rows you are going to get
    //back plane
    //3 items in the second array needs a -5 for the x position for both the bottom and the back plane
    //4 items needs 0
    //5 items needs +5?
    svg1.append("a-box").attr("class", "aplane").attr("id", "backPlane").attr("position", `${Options.plane.ZXaxisStartingXLocation} ${(Options.plane.maxHeight/2) - 10} -${Options.plane.zAxisDepth}`).attr("rotation", `0 0 0`).attr("width", `${Options.plane.xAxisDepth}`).attr("depth", "0.5").attr("height", `${Options.plane.maxHeight}`).attr("color", "#888888")
    
    //left side plane
    //svg1.append("a-plane").attr("id", "aplane").attr("position", "-20 0 -20").attr("rotation", `0 -90 0`).attr("width", "40").attr("depth", "1").attr("height", "20").attr("color", "#7BC8A4").attr("visible", "true")
    svg1.append("a-box").attr("class", "aplane").attr("id", "sidePlane").attr("position", `-20 ${(Options.plane.maxHeight/2) - 10} -${Options.plane.zAxisDepth/2}`).attr("rotation", `0 -90 0`).attr("width", `${Options.plane.zAxisDepth}`).attr("depth", "0.5").attr("height", `${Options.plane.maxHeight}`).attr("color", "#7BC8A4").attr("visible", "true")
}


