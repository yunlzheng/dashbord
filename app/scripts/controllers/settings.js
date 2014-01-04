'use strict';

function SettingsCtrl($scope, $cookieStore, $http) {

  $scope.setting = {
    'rootUrl': $cookieStore.get('rootUrl'),
    'port': $cookieStore.get('port'),
    'appKey': $cookieStore.get('appKey'),
    'appSecret': $cookieStore.get('appSecret'),
    'accessToken': $cookieStore.get('accessToken'),
    'useNode': true
  };

  $scope.saveSettings = function (setting) {

    $cookieStore.put('rootUrl', $scope.setting.rootUrl);
    $cookieStore.put('appKey', $scope.setting.appKey);
    $cookieStore.put('appSecret', $scope.setting.appSecret);
    $cookieStore.put('useNode', $scope.setting.useNode);
    $cookieStore.put('port', $scope.setting.port);

    var url = '/auth/token?grant_type=authorization_code';

    if (!setting.useNode) {
      url = $scope.rootUrl + url;
    }

    $http.get(url, {
      'headers': {
        'X-Consumer-key': setting.appKey,
        'X-Consumer-Secret': setting.appSecret
      }
    }).success(function (data) {

      if(data.code==='0'){
        $scope.setting.accessToken = data.token.id;
        $cookieStore.put('accessToken', $scope.setting.accessToken);
        $cookieStore.put('platformId', data.appkey);
      }

    });

  };

}

angular.module('dashbordApp')
  .controller('SettingsCtrl', ['$scope', '$cookieStore', '$http', SettingsCtrl]);