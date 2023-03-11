# Random MRT Station Generator

This is a simple JavaScript program that generates a random MRT station object from a multidimensional array of MRT lines and stations. The program can also accept an optional line name or code to filter the results to a specific MRT line.

## Usage

To use the program, simply run the `getRandomStation()` function with an optional line name or code as the parameter. The function will return a random station object from the specified MRT line, or from any MRT line if no parameter is provided.

```javascript
// Get a random station object from any MRT line
const randomStation = getRandomStation();
console.log(randomStation);

// Get a random station object from the East West line
const randomEastWestStation = getRandomStation("East West Line");
console.log(randomEastWestStation);

// Get a random station object from the NS line
const randomNSStation = getRandomStation("NS");
console.log(randomNSStation);
```

## MRT Lines and Stations
The multidimensional array of MRT lines and stations is stored in the mrtLines variable in the mrtStations module. Each MRT line is an object with a name, code, and stations property, where name is the full name of the line, code is the abbreviated code for the line (e.g. "EW" for East-West Line), and stations is an array of station objects.

Each station object has a name and code property, where name is the full name of the station and code is the abbreviated code for the station (e.g. "EW1" for Pasir Ris station on the East-West Line).

## License
This program is licensed under the [MIT License](LICENSE).. Feel free to use, modify, and distribute the code as needed.
