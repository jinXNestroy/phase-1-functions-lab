function distanceFromHqInBlocks(pickUpLocation) {
    return Math.abs(pickUpLocation - scuberHq)

}
let scuberHq = 42;

function distanceFromHqInFeet(pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * blockLength
}

let blockLength = 264

function distanceTravelledInFeet(pickUpLocation, dropOff) {
    return Math.abs(pickUpLocation - dropOff) * 264
}

function calculatesFarePrice(pickUpLocation, dropOff) {
    if (distanceTravelledInFeet(pickUpLocation, dropOff) <= 400) {
        fare = distanceTravelledInFeet(pickUpLocation, dropOff) * 0
    }
    else if (distanceTravelledInFeet(pickUpLocation, dropOff) > 400 && distanceTravelledInFeet(pickUpLocation, dropOff) < 2000) {
        fare = (distanceTravelledInFeet(pickUpLocation, dropOff) - 400) * 0.02
    }
    else if (distanceTravelledInFeet(pickUpLocation, dropOff) > 2000 && distanceTravelledInFeet(pickUpLocation, dropOff) < 2500) {
        fare = 25
    }
    else if (distanceTravelledInFeet(pickUpLocation, dropOff) > 2500) {
        fare = 'cannot travel that far'
    }
    return fare
}

let fare