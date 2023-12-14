


function checkFullName(name, surname) {
    return name + " - " + surname
}


function sendFullData(dateNow, dateBirth) {
    let result = dateNow - dateBirth;
    console.log(checkFullName("Huseyn", "Qurbanov"), result);
}


sendFullData(2023, 1997)





function fortune(childrenNumber, partnerName, geographicLocation, jobTitle) {
    console.log(" You will be a " + jobTitle + " in " + geographicLocation + " , and married to " + partnerName + " with " + childrenNumber + " kids.")
}

fortune(3, "Nermin", "Baku", "Ticaret")

