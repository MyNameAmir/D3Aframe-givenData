import { Options } from "./options.js";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { Plane } from "./plane.js";
import { Axis } from "./axis.js";
import { generateLine } from "./generateLine.js";
import { generateAxisLabel } from "./generateAxisLabel.js";

export function draw(bars, theData) {

    //make a intialization function/constructor for the code below and planes
    const width = 640;
    const height = 400;
    const svg1 = d3.create("a-scene")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "test")



    let zAxisDepth = theData.data.length * Options.plane.standardDepthPerUnit;
    let xAxisDepth = theData.data[0].length * Options.plane.standardDepthPerUnit;
    let ZXaxisStartingXLocation = Options.plane.ZXaxisStartingXLocation + (theData.data[0].length * 5);
    //you can use the getExtremes??
    let backPlaneMaxHeight = Math.max(...bars.map(bar => bar.height));
    //console.log(Options.plane.maxHeight)



    let bottomPlane = new Plane("bottomPlane", `${zAxisDepth}`, `${xAxisDepth}`, `${ZXaxisStartingXLocation} -10 -${zAxisDepth/2}`, `90 0 0`, "#7BC8A4");
    let backPlane = new Plane("backPlane", `${backPlaneMaxHeight}`, `${xAxisDepth}`, `${ZXaxisStartingXLocation} ${(backPlaneMaxHeight/2) - 10} -${zAxisDepth}`, `0 0 0`, "#888888");
    let leftSidePlane = new Plane("leftSidePlane", `${backPlaneMaxHeight}`, `${zAxisDepth}`, `-20 ${(backPlaneMaxHeight/2) - 10} -${zAxisDepth/2}`, `0 -90 0`, "#7BC8A4");

    bottomPlane.render(svg1);
    backPlane.render(svg1);
    leftSidePlane.render(svg1);


    let lineX = Options.chart.xAxisLineStartingX;
    let lineY = Options.chart.xAxisLineStartingY;
    for(let i of theData.data){
        //xaxis line generation
        generateLine(lineX, -9.7, lineY, zAxisDepth, Axis.X, svg1);
        //generateAxisLabel(zAxisDepth, -9.7, lineY, theData.categories)
        lineY -= 10;
    }

    for (let i = 0; i < bars.length; i++) {
        //array = array.sort();
        //TODO: add text into on top of the box, done.

        //with a height of 100, the position needs to be at 47
        //with a height of 10, it needs to be -2
        bars[i].render(svg1);

    }

    container.append(svg1.node());

}