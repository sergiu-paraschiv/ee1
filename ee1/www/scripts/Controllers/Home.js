(function(undefined) {
    'use strict';
    
    this.Base.controller('Home', [
        '$scope',
        'Venues',
        
        function($scope, venuesProvider) {
            $scope.meta = venuesProvider.getMeta();
            $scope.query = venuesProvider.getQuery();
        }
    ]);
        
}).call(this.ee1);
