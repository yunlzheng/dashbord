'use strict';

describe('Controller: SecurityGroupsCtrl', function () {

  // load the controller's module
  beforeEach(module('dashbordApp'));

  var SecurityGroupsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SecurityGroupsCtrl = $controller('SecurityGroupsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
