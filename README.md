# ICEdata

_A simple library to fetch the data from German highspeed trains ICE_

**Note: This only works from the WiFi onboard the ICEs (often called "WIFIonICE" or "WIFI@DB")**

## Installation

- npm: `npm install icedata`
- yarn: `yarn add icedata`

## Usage

```javascript
const ice = require("icedata");

ice.fetchAll();

// returns something like this:
let result = {
  connection: true,
  serviceLevel: "AVAILABLE_SERVICE",
  gpsStatus: "LAST_KNOWN_POSITION",
  internet: "HIGH",
  latitude: 51.312399666666664,
  longitude: 9.446855,
  tileY: 145,
  tileX: -11,
  series: "803",
  serverTime: 1628798106501,
  speed: 53,
  trainType: "ICE",
  tzn: "Tz103",
  wagonClass: "SECOND",
  connectivity: {
    currentState: "HIGH",
    nextState: "UNSTABLE",
    remainingTimeSeconds: 637,
  },
  bapInstalled: true,
};
```
