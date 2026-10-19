const removeFromArray = function(array) {
    let newArray = array;
    for (let i = 0; i < arguments.length; i+=1)
    {
        newArray = newArray.filter(item => item !== arguments[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
