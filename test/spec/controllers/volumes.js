'use strict';

describe('Controller: VolumesCtrl', function () {

  // load the controller's module
  beforeEach(module('dashbordApp'));

  var VolumesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VolumesCtrl = $controller('VolumesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
