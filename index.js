// Code your solution here

//for case insensitive must convert to uppercase


function findMatching(drivers, string) {
    //console.log("string passed === ", string)
    return drivers.filter( driver => {
        return driver.toUpperCase() == string.toUpperCase()
    })
};

function fuzzyMatch(drivers, string) {
    return drivers.filter( driver => {
        return driver.charAt(0) === string.charAt(0)
    })
}

function matchName(drivers, string) {
    return drivers.filter( driver => { 
        return driver.name === string
    })
};