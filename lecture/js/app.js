(function(){
  'use strict';
  var module = angular.module('app', ['onsen', 'factory']);

  module.controller('AppController', function($scope, $data) {
    //
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;

    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      var page = '';
      switch(index) {
        case 0:
          page = 'who.html';
          break;
        case 1:
          page = 'what.html';
          break;
        case 2:
          page = 'why.html';
          break;
        case 3:
          page = 'how.html';
          break;
        case 4:
          page = 'why.html';
          break;
        case 5:
          page = 'how.html';
          break;
      }
      $scope.navi.pushPage(page, {title : selectedItem.title});
    };
  });

})();
