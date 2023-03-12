const mrtStations = require('./mrtarrays');
// Define a function to return a random station from the mrt stations parent array
// that accepts a line name or code as an optional parameter
function getRandomStation(lineNameOrCode) {
    if(!lineNameOrCode) {
        // Get a random MRT Line array index
        const lineIndex = Math.floor(Math.random() * mrtStations.length);

        // Get a random station index within the chosen MRT Line array
        const stationIndex = Math.floor(Math.random() * mrtStations[lineIndex].stations.length);

        // Return the randomly chosen object
        return mrtStations[lineIndex].stations[stationIndex];
    }

    // Find the MRT line object based on the given name or code
    const mrtLine = mrtStations.find(line => line.name === lineNameOrCode || line.code === lineNameOrCode);

    // If the line is not found, return null
    if (!mrtLine) {
      return null;
    }

    // Get a random station object from the line's stations array
    const randomIndex = Math.floor(Math.random() * mrtLine.stations.length);
    const randomStation = mrtLine.stations[randomIndex];

    // Return the random station object
    return randomStation;
  }

// Get a random station object from any MRT line
const randomStation = getRandomStation();
console.log(randomStation);

// Get a random station object from the East-West line
const randomEastWestStation = getRandomStation("East West Line");
console.log(randomEastWestStation);

// Get a random station object from the NS line
const randomNSStation = getRandomStation("NS");
console.log(randomNSStation);
