
// Declare the chart dimensions and margins.
// make the stuff here be configurable in the options, make some loops to make it more flexible


//let bottomPlane = svg1.append("a-box")

export class Plane {
    constructor(id, height, width, position, rotation, color, depth) {
        this.id = id;
        this.height = height;
        this.width = width;
        this.position = position;
        this.rotation = rotation;
        this.color = color;
        this.depth = depth
    }

    render = function (svg1) {
        svg1.append("a-box").attr("class", "aplane").attr("id", this.id).attr("position", this.position).attr("rotation", this.rotation)
            .attr("depth", this.depth).attr("width", this.width).attr("height", this.height).attr("color", this.color).attr("visible", "true")
    }
}



