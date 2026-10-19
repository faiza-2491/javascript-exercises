const leapYears = function(num) {
    if ((num % 4) !== 0)
    {
        return false;
    }
    if ((num % 100) === 0)
    {
        if ((num % 400) !== 0)
        {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = leapYears;
