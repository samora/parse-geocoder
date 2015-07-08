// A little utility to parse the data geocoder outputs

var _ = require('lodash');

// Returns a parsed result object containing:
// addressComponent: hash of address component types
//  eg. {
  // country: {longName: 'Ghana', shortName: 'GH'},
  // administrative_area_level_1: {longName: 'Greater Accra', shortName: 'Greater Accra'}
// }
// formattedAddress: unmodified formatted_address of result
// geometry: unmodified geometry data of result
// addressPrecision: level to which location is accurate
var parseResult = exports.parseResult = function (result) {

    var rawAddressComponents = result.address_components;
    var formattedAddress = result.formatted_address;
    var geometry = result.geometry;
    var addressPrecision = result.types[0];
    var placeId = result.place_id
    var partialMatch = result.partial_match
    var addressComponents = {};

    _.forEach(rawAddressComponents, function (component) {
      addressComponents[component.types[0]] = {
        longName: component.long_name,
        shortName: component.long_name
      };
    });


    var parsedResult = {
      addressComponents: addressComponents,
      formattedAddress: formattedAddress,
      geometry: geometry,
      addressPrecision: addressPrecision
    };

    if( placeId !== undefined ) parsedResult.placeId = placeId;
    if( partialMatch !== undefined ) parsedResult.partialMatch = partialMatch;

    return parsedResult;
};

// parse all the results of geocoder data
var parseResults = exports.parseResults = exports.parse = function (data) {
  if (data.results) {
    return _.map(data.results, function (item) {
      return parseResult(item);
    });
  } else {
    return data;
  }
};
