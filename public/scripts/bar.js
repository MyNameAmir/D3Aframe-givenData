import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { Location } from "./Location.js"
import { Options } from "./options.js"


export class Bar {


    //i am hoping to make the GDP and the Country part be replacable
    constructor(id, data, colour, x = 0, y = 0) {
        this.id = `abox${id}`
        this.data = data;
        //TODO: move the line below to process in the data retrieving, data processing is there, move this there, DONE
        this.height = this.getHeight(data);
        //this.color = this.getColor(data[Object.keys(data)[Object.keys(data).indexOf(Options.bar.colourDecider)]]);
        this.location = new Location(x, this.height, y);
        this.colour = colour;
    }

    //TODO: the zero-th index of Axis.Z of the categories is the zero-th index of the colours in the options and the data
    //etColor = d3.scaleOrdinal(Options.bar.colours).domain(this.colour);

    //all 4 of these numbers are in the configurations object
    getHeight = d3.scaleLinear([Options.bar.minScale, Options.bar.maxScale], [0, 100]);

    setLocation(x, z) {
        this.location.x = x;
        this.location.z = z;
    }


    render(svg1){
        svg1.append("a-box").attr("id", `${this.id}`)
        .attr("position", `${this.location.x} ${(this.location.y / 2) -10} ${this.location.z}`)//the position has to be done this way because AFrame puts the position of the boxes at the half point on the height???
        .attr("height", `${this.location.y}`)
        .attr("width", Options.bar.width)
        .attr("depth", Options.bar.depth)
        .attr("color", this.colour);
    }
    // domains(data, value){
    //     let uniqueData = [];
    
    //     for(let i in data){
    //         uniqueData[i] = data[i][value];
    //     }
    //     return uniqueData;
    // }


}