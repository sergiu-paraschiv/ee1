(function(undefined) {
    'use strict';
    
    this.Base.controller('Venues', [
        '$scope',
        'Venues',
        
        function($scope, venuesProvider) {
            $scope.venues = venuesProvider.get();
        }
    ]);
        
}).call(this.ee1);
