var data = require('./data');
var parseGeocoder = require('../index');

var _ = require('lodash');

module.exports = {

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
  },

  testParse: function (test) {
    parsedResults = parseGeocoder.parse(data);
    secondResult = parsedResults[1];
    test.equal('Ghana', secondResult.addressComponents.country.longName);
    test.equal('West Legon, Accra, Ghana', secondResult.formattedAddress);
    test.done();
  }
};
