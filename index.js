const request = require('request');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('99.239.166.104', (error, coordinates) => {
//   if (error) {
//     console.log("it didn't work", error)
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coordinates)
// })

// const exampleCoords = { latitude: 43.653226, longitude: -79.3831843 }

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("it didn't work!", error)
//     return;
//   };

//   console.log('it worked! Returned flyover times:', passTimes)
// })

const printPassTimes = function(passTimes) {
  for (const pass of passTimes.response) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);

  }
}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error)
  }
  printPassTimes(passTimes);
});

