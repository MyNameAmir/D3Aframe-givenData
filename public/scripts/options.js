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
        xAxisLineStartingY: -5,
        xAxisLineStartingX: -20,
        textColour: "black",
        lineColour: 'red',
        title: "whatever",
        titlePosition: [],
        AxesLabel: []
        //look at how excel does this maybe
    },

    bar: {
        colourDecider: "Country",
        maxScale: 200000,
        minScale: 0,
        depth: 2.5,
        width: 2.5,
        colours: ["yellow", "red", "blue", "green", "black", "gold", "teal", "purple", "white"],
        startingX: -15,
        startingY: -5,
        
    },

    plane: {
        //not in the options as they are not configurable by the user, but rather decided by the data
        depth: 0.5,
        ZXaxisStartingXLocation: -20,
        standardDepthPerUnit: 10
    }
    
}