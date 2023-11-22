import { Axis } from "./axis.js";




export class Model{

    //lets make this work for now
    constructor(data, categories){
        this.data = data;
        this.categories = categories;
    }

    //how many items on the xaxis, zaxis? calculates that, based on the filtering (make it work without the filtering for now), 
    //goal is to filter in the 2014 GDP data, returns back some number indicating the number of values on that axis
    numberOfValues(onAxis){
        //I assume this function will be used to determine the number of values that fall on each axis based on the filtered data, but for now it just gets the length of the arrays on each axis and returns the length
        return this.categories[onAxis].length;
    }
    //getValuesOnAxis(Axis.Z, true)
    //get all of the values on a specific axis, such as Z would be all the countries based on the previous filtering, then if unique is on 
    //return the unique values, returns an array, DOMAINS can use this with the unique filter on, domains is for x and y...
    getValuesOnAxis(onAxis, unique = false){
        let result = []

            for(let i of this.categories[onAxis]){
                if(unique){
                    if(result.indexOf(i) != -1){
                        result.push(i)
                    }
                }
                else{
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
    getExtremes(){
        let extremes = {min: this.data[0][0], max: this.data[0][0]}
        for(let i of this.data){
            for(let j of i){
                if(j > extremes.max)
                    extremes.max = j;
                if(j < extremes.min)
                    extremes.min = j;
            }
        }
        return extremes;
    }
    //get the height by pulling out the correct height value based on z and x axis
    getHeight(onFirstAxis, onSecondAxis, onFirstAxisValue, onSecondAxisValue){
        //come back to this one
        return this.data[this.categories[onFirstAxis].indexOf(onFirstAxisValue)][this.categories[onSecondAxis].indexOf(onSecondAxisValue)];
    }

    //in case of a search for a specific value in the 2D array, this 
    getAxes(value){
        let axes = {[Axis.Z]: null, [Axis.X]: null};
        let moreAxes = [];
        for(let i of this.data){
            for(let j of i){
                if(j == value){
                    axes[Axis.Z] = this.categories[Axis.Z][this.data.indexOf(i)];
                    axes[Axis.X] = this.categories[Axis.X][i.indexOf(j)];
                    moreAxes.push(axes);
                }
            }
        }
        if(moreAxes.length == 0){
            return null;
        }

        return moreAxes;
    }
    //return some information for now based on x and z axis data passed on
    getInfo(onFirstAxis, onSecondAxis){
        
    }
    //later
    filterUsing(){}


}