'use strict';

describe('Filter: formatByte', function () {

  // load the filter's module
  beforeEach(module('dashbordApp'));

  // initialize a new instance of the filter before each test
  var convertByteToGB;
  beforeEach(inject(function ($filter) {
    convertByteToGB = $filter('formatByte');
  }));

  it('should return the input prefixed with "formatByte filter:"', function () {
    var text = 'angularjs';
    expect(convertByteToGB(text)).toBe('formatByte filter: ' + text);
  });

});
