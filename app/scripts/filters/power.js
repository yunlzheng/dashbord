'use strict';

angular.module('dashbordApp')
  .filter('power', function () {
    return function (input) {
      var result = "";
      if(input === 1){
      	result = "on";
      }else{
      	result = "off"
      }
      return result;
    };
  });
