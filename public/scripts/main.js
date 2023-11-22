import { Axis } from "./axis.js" 
import {Model} from "./Model.js"
let categories = {};
//thinking of doing vvv in the options but well come back to this
categories.display = {[Axis.Z] : ["Finland", "Norway", "Sweden"],
[Axis.X] : ["Q1", "Q2", "Q3", "Q4"] };

 let data = [
     [70355, 70741, 68858, 64976],      // Finland
     [128895, 132259, 125965, 114804],  // Norway
     [149240, 147863, 141663, 134831]   //Sweden
 ];  // the columns represent Q1 -> Q4

let theData = new Model(data, categories.display);

console.log(theData.numberOfValues(Axis.Z));
 
 console.log ("Countries are: " + theData.getValuesOnAxis(Axis.Z));
 console.log ("extremes are: " + theData.getExtremes().min + " & " + theData.getExtremes().max);
 console.log ("Value of the GDP for Norway on the second quarter is: " + theData.getHeight(Axis.Z, Axis.X, "Norway", "Q2"));
 let axes = theData.getAxes(theData.getHeight(Axis.Z, Axis.X, "Norway", "Q2"))
 console.log ("there are " + axes.length + " countries with the GDP " + theData.getHeight(Axis.Z, Axis.X, "Norway", "Q2"));

//model view controller
//model view controller
//model view controller
//model view controller
//model view controller
//model view controller
//model view controller
//reproducibility, reusable
//https://support.microsoft.com/en-us/office/change-the-display-of-a-3-d-chart-60c13909-d2a1-4e06-8b8c-bccba7868c9b
//small filter

//august: at the end of each week, point form, what I did this week. and 
//a short point for what I will do next week. Kim email. 
//bar chart 3d with a slider

// // // Declare the x (horizontal position) scale.
// const x = d3.scaleUtc()
//     .domain([new Date("2023-01-01"), new Date("2024-01-01")])
//     .range([marginLeft, width - marginRight]);

// // Declare the y (vertical position) scale.
// const y = d3.scaleLinear()
//     .domain([0, 100])
//     .range([height - marginBottom, marginTop]);

// Create the SVG container.


// gui-slider.append("a-gui-slider")
//                  .attr("width", "2.5")
//                  .attr("height", "0.75")
//                  .attr("id", "slider")
//                  .attr("percent", "0.29")
//                  .attr("margin", "0 0 0.05 0")


//         <a-gui-slider 	
// 	width="2.5" height="0.75"
// 	onclick="slideActionFunction"
// 	percent="0.29"
// 	margin="0 0 0.05 0"
// >
// </a-gui-slider>



// // Add the x-axis.

// svg1.append("g")
//     .attr("transform", `translate(0,${height - marginBottom})`)
//     .call(d3.axisBottom(x));


// svg1.append("g")
//     .attr("transform", `translate(${marginLeft},0)`)
//     .call(d3.axisLeft(y));

// // Add the y-axis.
// const gx = svg1.append("g")
//     .attr("transform", `translate(0,${height - marginBottom})`)
//     .call(d3.axisBottom(x));

// // Append the SVG element.

//making a box using A-frame but appeding on d3





