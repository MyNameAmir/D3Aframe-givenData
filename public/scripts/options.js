//configurable options object, for 
import { Axis } from "./axis.js" 


export let Options = {
    data: {
        fileName: "/datafiles/GDP_Quarterly.csv",
        //add year to the selectedFields
        selectedFields: ["Country", "GDP", "Quarter", "year"],
        //height decider
        QuantitativeValue: "GDP",
        masterFilterField: "year",
        masterFilterValue: ["2014"],
        //********TODO */
        //investigate this

        //selectedKeys[0].axis
        //this works just has to be looped through, and checked for whatever you are looking for
        AxisToFieldConnector: [{axis: Axis.X, field: "Quarter"}, {axis: Axis.Y, field: "GDP"}, {axis: Axis.Z, field: "Country"}]
        //selectedKeys: {Axis.X: "Quarter", Axis.Y: "GDP", Axis.Z: "Country"}
        //to use the following you would say selectedKeys.Axis.X -> "Quarter"
       //maybe it is the height decider
    },
    //maximum scaling number for the height


    //add the walls configurations here too

    chart:{
        //maybe make the lines and the text and whatever else the chart needs into subobjects of the chart

        xAxisLineStartingZ: -5,
        xAxisLineStartingX: -20,
        zAxisLineStartingZ: -0,
        zAxisLineStartingX: -15,
        yAxisLineStartingY: -9.7,
        textColour: "black",
        lineColour: 'red',
        //the title of the entire chart
        title: "GDP of some countries for the year 2014 sample",
        titlePosition: [6, -11, 0.5],
        textWidth: 40,
        textHeight: 50,
        //label for the entire axis
        AxesLabel: ["GDP in Millions", "Countries", "Quarters"]

        //rotation??
        //look at how excel does this maybe
    },

    bar: {
        colourDecider: "Country",
        //keeping this for
        extremes:{
            minScale: 0,
            maxScale: 0
        },
        depth: 2.5,
        width: 2.5,
        colours: ["yellow", "red", "blue", "green", "black", "gold", "teal", "purple", "white"],
        startingX: -15,
        startingY: -5
        
    },

    plane: {
        planeColour: {bottomPlane: "#7BC8A4", backPlane: "#888888", leftPlane: "#7BC8A4"},
        depth: 0.5,
        ZXaxisStartingXLocation: -20,
        standardDepthPerUnit: 10
    },

    //where you would record information about the labels (font, fontsize, color, position based on whatever plane they sit on/beside, gap size between label and the plane)
    labels:{}
    
}