var data = require('./data');
var parseGeocoder = require('../index');

var _ = require('lodash');

module.exports = {
  testGetResults: function (test) {
    results = parseGeocoder.getResults(data);
    test.ok( _.isArray(results) );
    test.ok( _.size(results) > 0 );
    test.done();
  },

  testGetFirst: function (test) {
    first = parseGeocoder.getFirst(data);
    test.equal('street_number', first.address_components[0].types[0]);
    test.done();
  },

  testParseResult: function (test) {
    parsedResult = parseGeocoder.parseResult(data.results[0]);
    test.equal('Ghana', parsedResult.addressComponents.country.longName);
    test.equal('street_address', parsedResult.addressPrecision);
    test.equal(5.6489527, parsedResult.geometry.location.lat);
    test.equal('14 Ato Ahwoi Avenue, Accra, Ghana', parsedResult.formattedAddress);
    test.done();
  },

  testParseResults: function (test) {
    parsedResults = parseGeocoder.parseResults(data);
    secondResult = parsedResults[1];
    test.equal('Ghana', secondResult.addressComponents.country.longName);
    test.equal('West Legon, Accra, Ghana', secondResult.formattedAddress);
    test.done();
  }
};
