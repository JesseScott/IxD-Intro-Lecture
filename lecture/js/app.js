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
              two: 'Just take a look at this picture:',
              three: 'Or this one:',
              four: '... or this one:'
          },
          {
              title: 'WHAT',
              sub: 'is it?',
              one: 'Dan would say:',
              two: '"Interaction Design is about behaviour, how things work. I push a button on my mobile phone, and something happens. Defining what happens when a person uses a product or a service is what interaction designers do."',
              three: ' ~ Dan Saffer',
              four: 'Liz would ask:',
              five: '"Is IxD just about technology, or can it involve other types of products?"',
              six: ' ~ Liz Danzico',
              seven: 'Dan would add:',
              eight: '"Most interaction designers work on software, websites, or other technology like mobile devices. But interaction designers can also design products or services that have little or no technology in them."',
              nine: ' ~ Dan Saffer'
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
