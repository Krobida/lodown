'use strict';

// YOU KNOW WHAT TO DO //


/**
 * 
 * identity: Takes a value and returns a value unchaged
 * 
 * @param {*} value: single value that can be any datatype
 * 
 * @returns {*} : returns the value unchaged
 * 
 */
 
 function identity(value) {
    return value;
};
module.exports.identity = identity;


/**
 * 
 * typeOf: Compares the value given to a chain of if/else statements
 * while filtering out false positives to return the specific datatype as a string
 * 
 * @param {*} value: a single value that can be any datatype
 * 
 * @returns {string} : returns the datatype as a string EX: ("boolean", "string", "array", "object")
 * 
 */
 
function typeOf(value) {
    if (Array.isArray(value)) {
        return "array";
} else if (value instanceof Date) {
    return "date";
} else if (value === null) {
    return "null";
} else {
    return typeof(value);
    }
};
module.exports.typeOf = typeOf;


/**
 * 
 * first: Creates a new array that contains the nth number of values
 * starting from the first index to the last.
 * 
 * @param {array} array: The array that we want to get the values from.
 * 
 * @param {number} number: The number of values we want returned starting from index 0
 * 
 * @returns {array} array: Returns an empty array if array is not an array, or if the number
 * is less than 0. 
 * Returns the the value starting at index 0 if the number is undefined or NaN
 * Or else it returns an array starting at the index of the number given in the previous array.
 * 
 */
 
function first(array, number) {
    let result = [];
    if (!Array.isArray(array)) {
        return [];
    } else if(!number) {
        return array[0];
    }   return array.splice(0, number)
};
module.exports.first = first;

/**
 * 
 * last: Creates a new array that contains the nth number of values
 * starting from the last index to the first.
 * 
 * @param {array} array: The array that we want to get the values from.
 * 
 * @param {number} number: The number of values starting from the last index that we want returned.
 * 
 * @return {array} array: Returns an empty array if the first argument is not an array or 
 * if the number is less than 0.
 * Returns the value at the last index of the array if the number is undefined or NaN.
 * Or else it returns an array containing the last values from the number given in the previous array.
 * 
 */
 
function last(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (!number) {
        return array[array.length - 1]
    } else if (number > array.length) {
        return array
    }return array.slice(array.length - number)
};
module.exports.last = last;
 
 
 /**
  * 
  * indexOf: Loops through an array to check if the given value is equal to a value
  * at a specific index in the array. If it has that value then it returns that index.
  * 
  * @param {array} array: The array we're checking.
  * 
  * @param {*} value: The value that we're checking to see if it's in the array and what index
  * 
  * @return {number} number: If the array parameter is not an array then it returns -1.
  * If it finds the value in the array it will return the index number that the value was at.
  * 
  */
  
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (value === array[i])
        return i;
    } if (!array.includes(value)) {
        return -1;
    }
};
module.exports.indexOf = indexOf;
 
 
 /**
  * 
  * contains: Loops through a given array to see if it contains a value or not.
  * Returns true if the value exists in the array and returns false if the value doesnt
  * exist in the array.
  * 
  * @param {array} array: The array that we are checking through.
  * 
  * @param {*} value: Any datatype that we're looking for within the array given.
  * 
  * @return {boolean} boolean: Returns true if an index in the array contains the value.
  * Returns false if the index in the arrat does not contain the value.
  * 
  */
  
function contains(array, value) {
    return array.includes(value) ? true : false;
};
module.exports.contains = contains;
  
  
 /**
 * 
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 */
  
function each(collection, action) {
    if (Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++)
            action(collection[i], i, collection);
    } else {
        for(var key in collection) {
            action(collection[key], key, collection)
        }
    }
};
module.exports.each = each;


/**
 * 
 * unique: Designed to return a unique array with the duplicates from the given array removed.
 * 
 * @param {array} array: The array it's checking through.
 * 
 * @returns {array} array: A new array with the duplicates from the original removed.
 * 
 */
 
 function unique(array) {
    let uniqueValues = [];
    each(array, function(element, index, array) {
      if (indexOf(array, element) === index) {
        uniqueValues.push(element);
      }
    });
    return uniqueValues;
};
module.exports.unique = unique;


/**
 * 
 * filter: Designed to loop through an array and find the truthy values that are given after
 * a function is applied to them.
 * 
 * @param {array} array: The array that is getting checked for truthy values.
 * 
 * @param {function} function: The function that is applied on each value in the array given.
 * 
 * @returns {array} uniqueValues: A new array containing the truthy values of the previous array.
 * 
 */
 
function filter(array, action) {
    let filteredArray = [];
    each(array, function(elements, i, array) {
        if (action(elements, i, array)) {
            filteredArray.push(array[i])
        }
    }); return filteredArray;
};
module.exports.filter = filter;


/**
 * 
 * reject: Designed to loop through a given array and find the falsy values that are given
 * after a function is applied to them.
 * 
 * @param {array} array: The array that is getting checked for falsy values.
 * 
 * @param {function} action: The function that is applied to each value in the array given.
 * 
 * @returns {array} filteredArray: Returns a new array that contains all of the falsy values of the previous array.
 * 
 */
 
function reject(array, action){
    return filter(array, function(elements, i, array){ 
        return !(action(array[i], i, array));
    });
};
module.exports.reject = reject;


/**
 * 
 * partition: Designed to loop through the array given and find and split the truthy values
 * and falsy values into an array of sub arrays after a function is called on them.
 * 
 * @param {array} array: The array containing values that are getting checked whether they are truthy or falsy.
 * 
 * @param {function} action: The function that is applied to each value in the array given.
 * 
 * @returns {array} array: Returns an array of sub-arrays; one containing the truthy values,
 * and the other containing the falsy values.
 * 
 */
 
 function partition(array, action) {
    return [filter(array, action), reject(array, action)];
};
module.exports.partition = partition;


/**
 * 
 * map: Designed to loop through an array or an object, call a function on each element
 * in said array or object, and return the value of each call in a new array.
 * 
 * @param {array or object} collection: Either an array or an object in which to iterate
 * through their values and apply a function to them.
 * 
 * @param {function} action: The function that is applied to each value in either the
 * array or object.
 * 
 * @returns {array} results: Returns the results of the function that was applied to
 * either the array or object values.
 * 
 */
 
function map(collection, action) {
    let results = [];
    each(collection, function(elements, index, array) {
        results.push(action(collection[index], index, collection))
    }); return results;
};
module.exports.map = map;


/**
 * 
 * pluck: Designed to loop over an array of objects and return a specific properties values
 * 
 * @param {array} arrayOfObj: An array containing objects that is iterated through.
 * 
 * @param {string} prop: A property of an object that we are plucking the values from.
 * 
 * @returns {array} plucked: An array that holds the values of the property in the object
 * it looped through.
 * 
 */

function pluck(arrayOfObj, prop) {
let plucked =  []
    map(arrayOfObj,  function(elements, index, array) {
        plucked.push(array[index][prop])
    })
    return plucked
};
module.exports.pluck = pluck;


/**
 * 
 * every: Designed to iterate through a collection whether it be a array or object
 * and call a function on each of its elements. If every one of them returns true
 * then it returns a true boolean.
 * 
 * @param {array or object} collection: The collection which the function iterates through.
 * 
 * @param {function} action: The function that is applied to each element in the collection.
 * 
 * @returns {boolean} trueOrFalse: A boolean that only returns true when every element that is
 * passed through returns true.
 * 
 */

function every(collection, action) {
    let trueOrFalse = true;
    each(collection, function(element, index, collection) {
        if(typeOf(action) === 'function' && !action(element, index, collection)) {
            trueOrFalse = false;
        } else if (element === false) {
            trueOrFalse = false;
        }
    }); return trueOrFalse;
}
module.exports.every = every;


/**
 * 
 * some: Designed to loop through a collection whether it be an array or object
 * and call a function on each of its elements. If even one of the elements is
 * true, then it returns a true boolean.
 * 
 * @param {array or object} collection: The collection which the function iterates through.
 * 
 * @param {function} action: The function that is applied to each element in the collection.
 * 
 * @returns {boolean} trueOrFalse: A boolean that only returns false when every element that is
 * passed through returns false.
 * 
 */

function some(collection, action) {
    let trueOrFalse = false;
    each(collection, function(element, index, collection) {
        if(typeOf(action) === 'function' && action(element, index, collection)) {
            trueOrFalse = true;
        } else if (element === true) {
            trueOrFalse = true;
        }
    }); return trueOrFalse;
}
module.exports.some = some;


/**
 * 
 * reduce: Designed to loop through an array and call a function on the elements and
 * combines and returns them into a single value. Will start from the seed given 
 * and if no seed is given then it will start from the frist index in the array.
 * 
 * @param {array} array: An array to iterate through.
 * 
 * @param {function} action: The fuction that is applied to each index in
 * the array.
 * 
 * @param {*} seed: any value in which the function will start at.
 * 
 * @returns {*} value: any value which will be the last value that the function calls.
 * 
 */

function reduce(array, action, seed) {
    for (let i = 0; i < array.length; i++) {
        if (seed === undefined) {
            seed = array[0];
        } else {
            seed = action(seed, array[i], i)
        }
    } return seed;
}
module.exports.reduce = reduce;


/**
 * 
 * extend: Designed to iterate through objects and copy properties from one object to the
 * next, updating the previous objects properties.
 * 
 * @param {object} array of objects: Can be multiple objects for whiich the function
 * iterates through.
 * 
 * @returns {object} object: An object with updated properties.
 * 
 */

function extend(...object) {
    for (let i = 0; i < object.length; i++) {
        each(object[i], function(key, value) {
            object[0][value] = key
        });
    }return object[0]
}
module.exports.extend = extend;