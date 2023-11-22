// Stolen from https://masteringjs.io/tutorials/fundamentals/enum

//Shouldn't this be just X,Y and Z axis since that is the axes well always have, Z can be by default null since it could be 2d?
//the follwing creates an object with the same keys and attributes, such as {X: "X", Y: "Y", Z: "Z"}
function createEnum(values) {
  const enumObject = {};
  for (const val of values) {
    enumObject[val] = val;
  }
  return Object.freeze(enumObject);
}

export let Axis = createEnum(['X','Y','Z']);
console.log(Axis)