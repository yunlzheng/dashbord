'use strict';

describe('Controller: FlavorCtrl', function () {

  // load the controller's module
  beforeEach(module('dashbordApp'));

  var FlavorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlavorCtrl = $controller('FlavorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
