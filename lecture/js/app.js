(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

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
          page = 'where.html';
          break;
        case 3:
            page = 'when.html';
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

  module.factory('$data', function() {
      var data = {};

      data.items = [
          {
              title: 'WHO',
              sub: 'does interaction design?',
              one: 'Good question. I would argue that we all do it - designers of all sorts. Some of it is conscious, some of it unconscious. In fact, Interaction Design is made up from several different disciplines itself... so the people that work in IxD come from very diverse backgrounds!',
              two: 'Take a look at this picture:'
          },
          {
              title: 'WHAT',
              sub: 'is it?',
              one: 'Dan would say:',
              two: '"the discipline of defining the behaviour of products and systems that users interact with"'
          },
          {
              title: 'WHERE',
              sub: 'should we do it?',
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          },
          {
              title: 'WHEN',
              sub: 'do we do it?',
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          },
          {
              title: 'WHY',
              sub: 'should we do it?',
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          },
          {
              title: 'HOW',
              sub: 'do we do it?',
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          }
      ];

      return data;
  });
})();
