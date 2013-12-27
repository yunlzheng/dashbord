'use strict';

describe('Filter: power', function () {

  // load the filter's module
  beforeEach(module('dashbordApp'));

  // initialize a new instance of the filter before each test
  var power;
  beforeEach(inject(function ($filter) {
    power = $filter('power');
  }));

  it('should return the input prefixed with "power filter:"', function () {
    var text = 'angularjs';
    expect(power(text)).toBe('power filter: ' + text);
  });

});
