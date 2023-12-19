
/**
 * generic class for a location, stores the 3 dimentions
 */
export class Location{
    /**
     * Constructs a location object based on the x, y and z location passed on to it
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     */
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    // /**
    //  * Constructs a location object based on the array of locations passed on to it in a x, y and z manner
    //  * @param {array of numbers} locationArray 
    //  */
    // constructor(locationArray){
    //     this.x = locationArray[0];
    //     this.y = locationArray[1];
    //     this.z = locationArray[2];
    // }
}