(function(undefined) {
    'use strict';
    
    var Config = this.Config;

    this.Base.controller('Venue', [
        '$scope',
        '$stateParams',
        '$http',
        'Venues',
        
        function($scope, $stateParams, $http, venuesProvider) {
            var venueId = parseInt($stateParams.id);
            
            $scope.venue = venuesProvider.find(venueId);
            
            $scope.contact = {
                name: null,
                email: null,
                phone: null,
                month: null,
                year: null,
                capacity: null
            };
            
            function submitContact() {
                $http.post(Config.CONTACT_URL, $scope.contact)
                        .success(function() {
                        });
            }
            
            $scope.submitContact = submitContact;
        }
    ]);
        
}).call(this.ee1);
