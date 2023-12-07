import { Options } from "./options.js"
import { Bar } from "./Bar.js"

export function generateBars(theData){
    let bars = [];
    let idCount = 0;
    let colourIndex = 0;
    let barColour;
    let barX = Options.bar.startingX;
    let barY = Options.bar.startingY;
    for (let i of theData.data) {
        barColour = Options.bar.colours[colourIndex++]
        console.log(barColour)
        for (let j of i){
            bars.push(new Bar(idCount, j, barColour, barX, barY));
            barX += 10;
            idCount++;
        }
        barY -= 10;
        barX = Options.bar.startingX;
    }
    return bars;
}