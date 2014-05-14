(function(window, undefined) {
    'use strict';
    
    this.Base.controller('Venues', [
        '$scope',
        '$window',
        'Venues',
        
        function($scope, $window, venuesProvider) {
            $scope.venues = venuesProvider.get();
            
            $scope.listHeight = function() {
              return {
                'maxHeight': ($window.innerHeight - 310) + 'px'
              }
            };
        }
    ]);
        
}).call(this.ee1, this);
