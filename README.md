# parse-geocoder

Parse geocoder data into easily usable form

Gecoder returns data in standard Google JSON output. parse-geocoder makes the results easier to manipulate.

## Installation

```sh
npm install --save parse-geocoder
```

## API

### parseResult

```javascript
var result = parseGeocoder.parseResult(geocoderData.results[0]);
```

Returns a parsed result object containing:
* __addressComponent__: hash of address component types
  ```json
  {
    country: {longName: 'Ghana', shortName: 'GH'},
    administrative_area_level_1: {longName: 'Greater Accra', shortName: 'Greater Accra'}
  }
  ```
* __formattedAddress__: unmodified formatted_address of result
* __geometry__: unmodified geometry data of result
* __addressPrecision__: level to which location is accurate

See [parseResult.json](parseResult.json) for sample.

### parse

```javascript
var result = parseGeocoder.pare(geocoderData);
```

Returns an array of parseResults.

See [parse.json](parse.json) for sample.


## License

MIT
