
// Declare the chart dimensions and margins.
// make the stuff here be configurable in the options, make some loops to make it more flexible


//let bottomPlane = svg1.append("a-box")

/**
 * Used to create planes for the 3d chart and render it
 */
export class Plane {
    /**
     * Constructs a plane using the required information
     * @param {string} id 
     * @param {number} height 
     * @param {number} width 
     * @param {string} position 
     * @param {string} rotation 
     * @param {string} color 
     * @param {number} depth 
     */
    constructor(id, height, width, position, rotation, color, depth) {
        this.id = id;
        this.height = height;
        this.width = width;
        this.position = position;
        this.rotation = rotation;
        this.color = color;
        this.depth = depth
    }

    /**
     * Standard render function to attach the plane to the svg for the a-frame
     * @param {svg} svg1 
     */
    render = function (svg1) {
        svg1.append("a-box").attr("class", "aplane").attr("id", this.id).attr("position", this.position).attr("rotation", this.rotation)
            .attr("depth", this.depth).attr("width", this.width).attr("height", this.height).attr("color", this.color).attr("visible", "true")
    }
}



