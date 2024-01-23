//configurable options object, for 
import { Axis } from "./axis.js"

/**
 * Sets the options as a collective object for the data, bar, chart, plane and label
 * the user can configure the data in here to their own liking
 */
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
        AxisToFieldConnector: [{ axis: Axis.X, field: "Quarter" }, { axis: Axis.Y, field: "GDP" }, { axis: Axis.Z, field: "Country" }]
        //selectedKeys: {Axis.X: "Quarter", Axis.Y: "GDP", Axis.Z: "Country"}
        //to use the following you would say selectedKeys.Axis.X -> "Quarter"
        //maybe it is the height decider
    },
    //maximum scaling number for the height


    //add the walls configurations here too

    chart: {
        //maybe make the lines and the text and whatever else the chart needs into subobjects of the chart
        width: 640,
        height: 400,
        zAxisStartingLocationConst: 5,
        [Axis.X]: { label: "Countries", lineStartingX: -20, lineStartingY: -9.7, lineStartingZ: -5, gap: 10, labelY: -9.7 },
        [Axis.Y]: { label: "GDP in Millions", lineStartingY: -9.7, divisions: 10 }, //no gap on on the Y as it is just based on height
        [Axis.Z]: { label: "Quarters", lineStartingX: -15, lineStartingY: -9.7, lineStartingZ: 0, gap: 10, startingLocation: -5, labelY: -11.7 },
        xAxisLineStartingZ: -5,
        xAxisLineStartingX: -20,
        zAxisLineStartingZ: -0,
        zAxisLineStartingX: -15,
        yAxisLineStartingY: -9.7,
        lineColour: 'red',
        //the title of the entire chart
        title: {
            text: "GDP of some countries for the year 2014 sample",
            position: { [Axis.X]: -12, [Axis.Y]: -15, [Axis.Z]: 0.5 }, //absolute positioning based on the start
            textWidth: 70,
            textHeight: 90,
            textColour: "red"
        },
        tickLabel: {
            textWidth: 40,
            textHeight: 50,
            textColour: "blue",
            decimalPlaces: 2
        },

        font: "DejaVu",
        divisions: 10,
        //NOTE: look at how excel does this maybe, look for formatting of numbers into strings
        //looking for decimal place placement and adding dollar signs and commas and such
        //do more research on this, d3 preferably
        numberFormat(number){
            let locales = "en-GB";
            let style = "currency";
            let currency = "USD";
            return new Intl.NumberFormat(locales, {style: style, currency: currency}).format(number)


        },
        decimalPlaces: 2,
        xAxisGap: 10,
        zAxisGap: 10,
        planeOffset: 0.3 //this is to make sure the lines on the planes can show and lie on top of the plane rather than in the plane

        //rotation??
        //look at how excel does this maybe
    },

    plane: {
        planeColour: { bottomPlane: "#7BC8A4", backPlane: "#888888", leftPlane: "#7BC8A4" },
        depth: 0.5,
        ZXaxisStartingXLocation: -20,
        standardDepthPerUnit: 10,
        [Axis.X]: {
            rotation: `90 0 0`
        },
        [Axis.Y]: {
            rotation: `0 0 0`
        },
        [Axis.Z]: {
            rotation: `0 -90 0`
        },
        offset: 10
    },

    bar: {
        colourDecider: "Country",
        //keeping this for
        extremes: {
            minScale: 0,
            maxScale: 150000
        },
        depth: 2.5,
        width: 2.5,
        colours: ["yellow", "red", "blue", "green", "black", "gold", "teal", "purple", "white"],
        startingX: -15,
        startingZ: -5,
        offset: 10
    },
    //where you would record information about the labels (font, fontsize, color, position based on whatever plane they sit on/beside, gap size between label and the plane)
    //NOTE: I think this was resolved in the chart section of the Options
    labels: {}

}