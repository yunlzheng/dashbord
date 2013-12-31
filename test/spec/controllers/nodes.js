'use strict';

describe('Controller: NodesCtrl', function () {

  // load the controller's module
  beforeEach(module('dashbordApp'));

  var NodesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NodesCtrl = $controller('NodesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
