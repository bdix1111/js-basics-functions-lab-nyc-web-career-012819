// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let distance = street - 42;
  return Math.abs(distance)
}

function distanceFromHqInFeet(street) {
  let distance = distanceFromHqInBlocks(street) * 264;
  return distance
}

function distanceTravelledInFeet(startBlock, endBlock) {
  let distance = Math.abs(endBlock-startBlock) * 264;
  return distance;
}

function calculatesFarePrice(startBlock, endBlock) {
  let distance = distanceTravelledInFeet(startBlock, endBlock);
  let response;
  if (distance <= 400) {response = 0} else if (distance > 2500) {response = 'cannot travel that far'} else if (distance <= 2000) {response = (distance - 400) * .02} else {response = 25}
  return response;
}
