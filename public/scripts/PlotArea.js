import { generateBars } from "./generate/generateBars.js";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { Plane } from "./plane.js";
import { Axis } from "./axis.js";
import { generateLine } from "./generate/generateLine.js";
import { generateLabel } from "./generate/generateLabel.js";
import { Location } from "./location.js";


/**
 * a class whose objects are used to create the scene and the entirety of the plot
 */
export class PlotArea {
    /**
     * constructs a class of PlotArea, where the whole plot is constructed. The planes, the bars, the lines, the labels and the titles of the plot.
     * @param {*} theData 
     * @param {*} Options 
     */
    constructor(theData, Options) {
        this.bars = generateBars(theData, Options);
        //make a intialization function/constructor for the code below and planes
        const width = 640;
        const height = 400;
        //a-frame starts at 0, 0, 0 when visualized, can be changed (TODO)
        const svg1 = d3.create("a-scene")
            .attr("width", width)
            .attr("height", height)
            .attr("id", "test")


        //allows the definition of the depth of the z and x axis, as they are not determined by the values in the data
        const zAxisDepth = theData.data.length * Options.plane.standardDepthPerUnit;
        const xAxisDepth = theData.data[0].length * Options.plane.standardDepthPerUnit;
        //take the 5 and put it in the options
        const ZXaxisStartingXLocation = Options.plane.ZXaxisStartingXLocation + (theData.data[0].length * Options.chart.zAxisStartingLocationConst);
        //you can use the getExtremes??
        const backPlaneMaxHeight = Math.max(...this.bars.map(bar => bar.height));
        //console.log(Options.plane.maxHeight)

        //colours need to be in the options for the planes, same with the embedded constants in the options
        const bottomPlane = new Plane("bottomPlane", `${zAxisDepth}`, `${xAxisDepth}`, `${ZXaxisStartingXLocation} -10 -${zAxisDepth / 2}`, Options.plane[Axis.X].rotation, Options.plane.planeColour.bottomPlane, Options.plane.depth);
        const backPlane = new Plane("backPlane", `${backPlaneMaxHeight}`, `${xAxisDepth}`, `${ZXaxisStartingXLocation} ${(backPlaneMaxHeight / 2) - 10} -${zAxisDepth}`, Options.plane[Axis.Y].rotation, Options.plane.planeColour.backPlane, Options.plane.depth);
        const leftSidePlane = new Plane("leftSidePlane", `${backPlaneMaxHeight}`, `${zAxisDepth}`, `-20 ${(backPlaneMaxHeight / 2) - 10} -${zAxisDepth / 2}`, Options.plane[Axis.Z].rotation, Options.plane.planeColour.leftPlane, Options.plane.depth);

        bottomPlane.render(svg1);
        backPlane.render(svg1);
        leftSidePlane.render(svg1);


        let lineX = Options.chart.xAxisLineStartingX;
        let lineZ = Options.chart.xAxisLineStartingZ;
        
        let j = 0;
        for (let i of theData.data) {
            //xaxis line generation
            generateLine(new Location(lineX, -10 + Options.chart.planeOffset, lineZ), zAxisDepth, Axis.X, svg1);
            //make the placement of the text be configurable based on the plane it is beside, add a gap also, and that gap is configurable
            //make these configurable items be a subobject of the options and then you pass that subject to the generate axis label
            generateLabel(new Location(zAxisDepth, -10 + Options.chart.planeOffset, lineZ), theData.categories[Axis.Z][j], svg1, Options.chart.tickLabel)
            lineZ -= Options.chart.zAxisGap;
            j++
        }
        lineZ = Options.chart.zAxisLineStartingZ;

        let maxDataValueDivision = theData.maxValue / Options.chart.divisions;
        let yAxisLabel = maxDataValueDivision;
        for (let y = -10 + Math.ceil(backPlaneMaxHeight / Options.chart.divisions); y + Math.ceil(backPlaneMaxHeight / Options.chart.divisions) < backPlaneMaxHeight; y += Math.ceil(backPlaneMaxHeight / Options.chart.divisions)) {
            generateLine(new Location(lineX, y, -zAxisDepth + Options.chart.planeOffset), zAxisDepth, Axis.X, svg1);
            generateLabel(new Location(zAxisDepth, y, -zAxisDepth + Options.chart.planeOffset), yAxisLabel.toFixed(Options.chart.decimalPlaces), svg1, Options.chart.tickLabel);
            generateLine(new Location(lineX + Options.chart.planeOffset, y, lineZ), zAxisDepth, Axis.Z, svg1);
            generateLabel(new Location(lineX - Math.abs(yAxisLabel.toFixed(Options.chart.decimalPlaces)).toString().length - 3, y, Options.chart.planeOffset), yAxisLabel.toFixed(Options.chart.decimalPlaces), svg1, Options.chart.tickLabel);
            yAxisLabel += maxDataValueDivision;
        }

        lineZ = Options.chart.zAxisLineStartingZ;
        lineX = Options.chart.zAxisLineStartingX;

        for (let i = 0; i < theData.data[0].length; i++) {
            generateLine(new Location(lineX, -10 + Options.chart.planeOffset, lineZ), zAxisDepth, Axis.Z, svg1);
            generateLabel(new Location(lineX, -10 + Options.chart.planeOffset, Options.chart.planeOffset), theData.categories[Axis.X][i], svg1, Options.chart.tickLabel)
            lineX += Options.chart.xAxisGap;
        }


        //title
        generateLabel(new Location(Options.chart.title.position[Axis.X], Options.chart.title.position[Axis.Y], Options.chart.title.position[Axis.Z]), Options.chart.title.text, svg1, Options.chart.title);
        //container from the HTML
        let container = document.getElementById("container");
        this.svg1 = svg1;
        container.append(svg1.node());
    }

    /**
     * draws the bars using a loop
     */
    draw() {
        for (let i = 0; i < this.bars.length; i++) {
            //array = array.sort();
            //TODO: add text into on top of the box, done.

            //with a height of 100, the position needs to be at 47
            //with a height of 10, it needs to be -2
            this.bars[i].render(this.svg1);

        }
    }
}