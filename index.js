// A little utility to parse the data geocoder outputs

var _ = require('lodash');

// Gets all results
var getResults = exports.getResults = function (data) {
  return data.results;
};

// Gets first result
var getFirst = exports.getFirst = function (data) {
  return data.results[0];
};

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

    return parsedResult;
};

// parse all the results of geocoder data
var parseResults = exports.parseResults = function (data) {
  return _.map(data.results, function (item) {
    return parseResult(item);
  });
};