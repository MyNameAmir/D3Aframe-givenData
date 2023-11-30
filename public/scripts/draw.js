import { Options } from "./options.js";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { planes } from "./plane.js";

export function draw(bars) {

    //make a intialization function/constructor for the code below and planes
    const width = 640;
    const height = 400;
    const svg1 = d3.create("a-scene")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "test")


    //you can use the getExtremes??
    Options.plane.maxHeight = Math.max(...bars.map(bar => bar.height));
    //console.log(Options.plane.maxHeight)

    planes(svg1);


    for (let i = 0; i < bars.length; i++) {
        //array = array.sort();
        //TODO: add text into on top of the box, done.

        //with a height of 100, the position needs to be at 47
        //with a height of 10, it needs to be -2
        svg1.append("a-box")
            .attr("id", `abox${i}`)
            .attr("position", `${bars[i].location.x} ${(bars[i].location.y / 2) -10} ${bars[i].location.z}`)//the position has to be done this way because AFrame puts the position of the boxes at the half point on the height???
            .attr("height", `${bars[i].location.y}`)
            .attr("width", Options.bar.width)
            .attr("depth", Options.bar.depth)
            .attr("rotation", `0 0 0`)
            .attr("color", bars[i].colour);

    }

    container.append(svg1.node());

}