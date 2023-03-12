import mrtStations from './line-arrays.js';
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

document.getElementById('randomize-button').addEventListener('click', () => {
    const linename = document.getElementById('line-name').value;
    // const linecode = document.getElementById('line-code').value;
    document.getElementById('output').classList.remove('invisible')
    if (linename) {
        const randomStation = getRandomStation(linename);
        document.getElementById('random-station').innerHTML = `${randomStation.name} (${randomStation.code})`;
        return;
    }
    const randomStation = getRandomStation();
    document.getElementById('random-station').innerHTML = `${randomStation.name} (${randomStation.code})`;
});
