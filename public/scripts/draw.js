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
    //take the 5 and put it in the options
    let ZXaxisStartingXLocation = Options.plane.ZXaxisStartingXLocation + (theData.data[0].length * 5);
    //you can use the getExtremes??
    let backPlaneMaxHeight = Math.max(...bars.map(bar => bar.height));
    //console.log(Options.plane.maxHeight)

    //colours need to be in the options for the planes, same with the embedded constants in the options
    let bottomPlane = new Plane("bottomPlane", `${zAxisDepth}`, `${xAxisDepth}`, `${ZXaxisStartingXLocation} -10 -${zAxisDepth / 2}`, `90 0 0`, Options.plane.planeColour.bottomPlane, Options.plane.depth);
    let backPlane = new Plane("backPlane", `${backPlaneMaxHeight}`, `${xAxisDepth}`, `${ZXaxisStartingXLocation} ${(backPlaneMaxHeight / 2) - 10} -${zAxisDepth}`, `0 0 0`, Options.plane.planeColour.backPlane, Options.plane.depth);
    let leftSidePlane = new Plane("leftSidePlane", `${backPlaneMaxHeight}`, `${zAxisDepth}`, `-20 ${(backPlaneMaxHeight / 2) - 10} -${zAxisDepth / 2}`, `0 -90 0`, Options.plane.planeColour.leftPlane, Options.plane.depth);

    bottomPlane.render(svg1);
    backPlane.render(svg1);
    leftSidePlane.render(svg1);


    let lineX = Options.chart.xAxisLineStartingX;
    let lineZ = Options.chart.xAxisLineStartingZ;
    let lineY = Options.chart.yAxisLineStartingY;
    let j = 0;
    for (let i of theData.data) {
        //xaxis line generation
        generateLine(lineX, -9.7, lineZ, zAxisDepth, Axis.X, svg1);
        //make the placement of the text be configurable based on the plane it is beside, add a gap also, and that gap is configurable
        //make these configurable items be a subobject of the options and then you pass that subject to the generate axis label
        generateAxisLabel(zAxisDepth, -9.7, lineZ, theData.categories[Axis.Z][j], svg1)
        lineZ -= 10;
        j++
    }
    lineZ = Options.chart.zAxisLineStartingZ;
    let maxDataValueStep = theData.maxValue / 10;
    let yAxisLabel = maxDataValueStep;
    for (let y = -10 + Math.ceil(backPlaneMaxHeight / 10); y + Math.ceil(backPlaneMaxHeight / 10) < backPlaneMaxHeight; y += Math.ceil(backPlaneMaxHeight / 10)) {
        generateLine(lineX, y, -zAxisDepth + 0.3, zAxisDepth, Axis.X, svg1);
        generateAxisLabel(zAxisDepth, y, -zAxisDepth + 0.3, yAxisLabel.toFixed(2), svg1);
        generateLine(lineX + 0.3, y, lineZ, zAxisDepth, Axis.Z, svg1);
        generateAxisLabel(lineX - Math.abs(yAxisLabel.toFixed(2)).toString().length - 3, y, 0.3, yAxisLabel.toFixed(2), svg1);
        yAxisLabel += maxDataValueStep;
    }

    lineZ = Options.chart.zAxisLineStartingZ;
    lineX = Options.chart.zAxisLineStartingX;

    for (let i = 0; i < theData.data[0].length; i++) {
        generateLine(lineX, -9.7, lineZ, zAxisDepth, Axis.Z, svg1);
        generateAxisLabel(lineX, -9.7, 0.2, theData.categories[Axis.X][i], svg1)
        lineX += 10;
    }


    for (let i = 0; i < bars.length; i++) {
        //array = array.sort();
        //TODO: add text into on top of the box, done.

        //with a height of 100, the position needs to be at 47
        //with a height of 10, it needs to be -2
        bars[i].render(svg1);

    }

    generateAxisLabel(Options.chart.titlePosition[0], Options.chart.titlePosition[1], Options.chart.titlePosition[2], Options.chart.title, svg1);
    //container from the HTML
    let container = document.getElementById("container");
    container.append(svg1.node());

}