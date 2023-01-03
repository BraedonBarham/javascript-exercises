const removeFromArray = function(...args) {
const arr = args[0];
const newarr = [];

// [2, 3, 5, 9]
//3
// IT DOES NOT LOOK AT THE INDIVIDUAL ELEMENTS IN ...ARGS[0] BECAUSE IT'S PER ITEM. THERE IS NO ARRAY OF INTS IN "ELEMENT"

// For each element in the array "arr"

arr.forEach(element => {

    // if any of the "remove" arguments don't include an element

    if (!args.includes(element)){

        // Add it to the new array
        newarr.push(element)


    }
});
return newarr;





};

// Do not edit below this line
module.exports = removeFromArray;
