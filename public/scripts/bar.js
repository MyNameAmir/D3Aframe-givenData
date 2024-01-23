import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { Location } from "./location.js"
import { Options } from "./options.js"

export class Bar {

    //pass options to this, passed options but the options are not working for the getHeight
    //i am hoping to make the GDP and the Country part be replacable

    /**
     * constructs a bar with the needed parameters and the needed information. 
     * this is going to be used to generate the bars for the plot
     * 
     * @param {string} id 
     * @param {number} data 
     * @param {string} colour 
     * @param {number} x 
     * @param {number} z 
     * @param {Options} Options 
     */
    constructor(id, data, colour, x = 0, z = 0, width, depth) {
        this.id = `abox${id}`
        this.data = data;
        //TODO: move the line below to process in the data retrieving, data processing is there, move this there, DONE
        this.height = this.getHeight(data);
        //this.color = this.getColor(data[Object.keys(data)[Object.keys(data).indexOf(Options.bar.colourDecider)]]);
        this.location = new Location(x, this.height, z);
        this.colour = colour;
        this.width = width;
        this.depth = depth;
      
        
    }

    //TODO: the zero-th index of Axis.Z of the categories is the zero-th index of the colours in the options and the data
    //getColor = d3.scaleOrdinal(Options.bar.colours).domain(this.colour);

    //all 4 of these numbers are in the configurations object
    //not part of options, is calculated by the model
    //make it into a function, this is a function, change the minScale and maxScale to appropriate numbers based on data
    
    /**
     * generates a number between 0 and 100 based on the Options minScale and maxScale of the bar, based on the data passed to it (the height)
     */
    getHeight = d3.scaleLinear([Options.bar.extremes.minScale, Options.bar.extremes.maxScale], [0, 100]);
    
    /**
     * generates a location object and assigns the x and z to them
     * @param {number} x 
     * @param {number} z 
     */
    setLocation(x, z) {
        this.location.x = x;
        this.location.z = z;
    }


    /**
     * the generic render function for bars that append's the bar to the svg
     * @param {svg1} svg1 
     */
    render = function(svg1){
        svg1.append("a-box").attr("id", `${this.id}`)
        .attr("position", `${this.location.x} ${(this.location.y / 2) - Options.bar.offset} ${this.location.z}`)//the position has to be done this way because AFrame puts the position of the boxes at the half point on the height???
        .attr("height", `${this.location.y}`)
        .attr("width", this.width)
        .attr("depth", this.depth)
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