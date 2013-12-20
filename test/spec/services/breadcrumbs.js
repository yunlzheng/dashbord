'use strict';

describe('Service: Breadcrumbs', function () {

  // load the service's module
  beforeEach(module('dashbordApp'));

  // instantiate service
  var Breadcrumbs;
  beforeEach(inject(function (_Breadcrumbs_) {
    Breadcrumbs = _Breadcrumbs_;
  }));

  it('should do something', function () {
    expect(!!Breadcrumbs).toBe(true);
  });

});
