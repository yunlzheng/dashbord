'use strict';

describe('Service: Respinterceptor', function () {

  // load the service's module
  beforeEach(module('dashbordApp'));

  // instantiate service
  var Respinterceptor;
  beforeEach(inject(function (_Respinterceptor_) {
    Respinterceptor = _Respinterceptor_;
  }));

  it('should do something', function () {
    expect(!!Respinterceptor).toBe(true);
  });

});
