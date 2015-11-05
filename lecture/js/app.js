(function(){
  'use strict';
  var module = angular.module('app', ['onsen', 'factory']);

  module.controller('AppController', function($scope, $data) {
    //
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;

    // Alerts
    $scope.alert = function(msg) {
      ons.notification.alert({message: msg});
    }

    // Popovers
    ons.createPopover('popover.html').then(function(popover) {
      $scope.popover = popover;
    });

    $scope.show = function(e) {
      $scope.popover.show(e);
    };

  });

  module.controller('MasterController', function($scope, $data, $timeout) {
    $scope.items = $data.items;

    $scope.load = function($done) {
      console.log('starting...');
      console.log(loader.getCurrentState());
      $timeout(function() {
        console.log('going...');
        //$scope.items.unshift($scope.items.length + 1);
        $done();
      }, 1000);
    };

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
          page = 'ui.html';
          break;
        case 5:
          page = 'ctrl.html';
          break;
      }
      $scope.navi.pushPage(page, {title : selectedItem.title});
    };
  });

})();
