// write code below that imports all files with "line-" in the name and adds them to the mrtStations array
const EWLine = require('./line-ew');
const NSLine = require('./line-ns');
const NELine = require('./line-ne');
const CCLine = require('./line-cc');
const DTLine = require('./line-dt');
const TELine = require('./line-te');
const JRLine = require('./line-js');
const CILine = require('./line-cr');

// define an array of all the imported files
const mrtStations = [
    EWLine, NSLine, NELine, CCLine, DTLine, TELine, JRLine, CILine
];

// export the array
module.exports = mrtStations;
