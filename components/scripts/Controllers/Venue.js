(function(_, undefined) {
    'use strict';
    
    var Config = this.Config;

    this.Base.controller('Venue', [
        '$scope',
        '$stateParams',
        '$http',
        '$state',
        'Venues',
        
        function($scope, $stateParams, $http, $state, venuesProvider) {
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
            
            function submitContact(contact) {
              if(contact.$valid) {
                $http.post(Config.CONTACT_URL, $scope.contact)
                        .success(function() {
                        });
              }
            }
            
            $scope.submitContact = submitContact;
            
            $scope.tabs = {
              'description': true,
              'images': false,
              'contact': false,
              'map': false
            };
            
            $scope.showTab = function(what) {
              _.each($scope.tabs, function(tab, tabName) {
                $scope.tabs[tabName] = false;
              });
              
              $scope.tabs[what] = true;
            };
            
            $scope.goBack = function() {
              if($scope.tabs['description'] === true)
              {
                $state.go('base.venues');
              } else {
                $scope.showTab('description');
              }
            };
        }
    ]);
        
}).call(this.ee1, this._);
