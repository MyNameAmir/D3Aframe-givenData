import { Axis } from "./axis.js";





export class Model {

    /**
     * Should be there to create and extract the data, and make things work based on the Options
     * @param {Options} options 
     */
    constructor(options) {

        // clearly we're ignoring options for now
        // d3.getCSV to start
        // d3.filter to only get 2014 
        // d3.rollup will help get the categories
        let categories = {};

        categories.display = {
            [Axis.Z]: ["Latvia", "Lithuania", "Finland", "Norway", "Sweden", "Nomansland"],

            [Axis.X]: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"] //Q5 haha
        };


        //if any of the data points is insanely big, then the chart would not show the small values because of the scaling
        let data = [
            [70355, 70741, 68858, 18888, 38888, 18888, 18888, 171231],//latvia
            [70355, 70741, 68858, 18888, 18888, 18888, 18888, 23123], //Lithuania

            [70355, 70741, 68858, 18888, 18888, 18888, 18888, 9999],      // Finland

            [128895, 132259, 125965, 18888, 18888, 8888, 18888, 123781],  // Norway

            [149240, 147863, 64976, 18888, 18888, 8888, 18888, 65565], //Sweden

            [149240, 147863, 64976, 18888, 18888, 8888, 18888, 65655] //nomansland

        ];  // the columns represent Q1 -> Q4
        this.data = data;
        this.categories = categories.display;



        this.maxValue = this.getExtremes().max;
    }

    //how many items on the xaxis, zaxis? calculates that, based on the filtering (make it work without the filtering for now), 
    //goal is to filter in the 2014 GDP data, returns back some number indicating the number of values on that axis
    /**
     * determines the number of values on each axis
     * @param {Axis} onAxis 
     * @returns 
     */
    numberOfValues(onAxis) {
        //I assume this function will be used to determine the number of values that fall on each axis based on the filtered data, but for now it just gets the length of the arrays on each axis and returns the length
        return this.categories[onAxis].length;
    }
    //getValuesOnAxis(Axis.Z, true)
    //get all of the values on a specific axis, such as Z would be all the countries based on the previous filtering, then if unique is on 
    //return the unique values, returns an array, DOMAINS can use this with the unique filter on, domains is for x and y...
    getValuesOnAxis(onAxis, unique = false) {
        let result = []

        for (let i of this.categories[onAxis]) {
            if (unique) {
                if (result.indexOf(i) != -1) {
                    result.push(i)
                }
            }
            else {
                result.push(i)
            }
        }


        return result;
    }

    // async getValuesOnDataField(dataField){
    //     let values = [];
    //     for (let i of this.rawData.data){
    //         console.log(i[dataField])
    //         if(values.indexOf(i[dataField]) == -1){
    //             values.push(i[dataField])
    //         }
    //     }
    //     return values;
    // }

    //in the case of this data, the Y axis needs the extremes, in the case of GDP would be 0 to the highest GDP value (in the filtered data)
    /**
     * based on the data it determines the min and max of the data
     * @returns an extreme object
     */
    getExtremes() {
        let extremes = { min: this.data[0][0], max: this.data[0][0] }
        for (let i of this.data) {
            for (let j of i) {
                if (j > extremes.max)
                    extremes.max = j;
                if (j < extremes.min)
                    extremes.min = j;
            }
        }


        return extremes;
    }
    /**
     * get the height by pulling out the correct height value based on z and x axis
     * @param {*} onZAxisValue this indicates the Z axis value
     * @param {*} onXAxisValue 
     * @returns 
     */
    getHeight(onZAxisValue, onXAxisValue) {

        return this.data[this.categories[Axis.Z].indexOf(onZAxisValue)][this.categories[Axis.X].indexOf(onXAxisValue)];
    }

    //in case of a search for a specific value in the 2D array, this 
    /**
     * searches for the coordinates of whatever value you pass on to it
     * @param {number} value 
     * @returns coordinates of the value
     */
    getCoordinatesOf(value) {
        let coordinates = { [Axis.Z]: null, [Axis.X]: null };
        let moreCoordinates = [];
        for (let i of this.data) {
            for (let j of i) {
                if (j == value) {
                    coordinates[Axis.Z] = this.categories[Axis.Z][this.data.indexOf(i)];
                    coordinates[Axis.X] = this.categories[Axis.X][i.indexOf(j)];
                    moreCoordinates.push(coordinates);
                }
            }
        }
        if (moreCoordinates.length == 0) {
            return null;
        }

        return moreCoordinates;
    }
    //return some information for now based on x and z axis data passed on
    getInfo(onFirstAxis, onSecondAxis) {

    }
    //later
    filterUsing() { }


}