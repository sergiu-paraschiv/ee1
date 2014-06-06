(function(_, window, undefined) {
    'use strict';

    var Config = this.Config;

    this.Base.controller('Venue', [
        '$scope',
        '$stateParams',
        '$http',
        '$state',
        '$timeout',
        'Venues',

        function($scope, $stateParams, $http, $state, $timeout, venuesProvider) {
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

            $scope.success = false;

            function submitContact(contact) {
              var success = function() {
                $scope.success = true;
                $scope.showTab('description');

                $timeout(function() {
                  $scope.success = false;
                }, 3000);
              };

              if(contact.$valid) {
                var message = '';
                message += 'Nume: ' + $scope.contact.name + "\n\n";
                message += 'Telefon: ' + $scope.contact.phone + "\n\n";
                message += 'Luna: ' + $scope.contact.month + "\n\n";
                message += 'An: ' + $scope.contact.year + "\n\n";
                message += 'Capacitate: ' + $scope.contact.capacity + "\n\n";

                var data = {
                  'id_contact': 2,
                  'from': $scope.contact.email,
                  'id_order': 'Contact Aplicatie',
                  'message': message
                };

                var fd = new FormData();
                _.each(data, function (value, key) {
                  fd.append(key, value);
                });

                $http.post(Config.CONTACT_URL, fd, {
                  headers:{
                    'Content-Type': 'multipart/form-data'
                  },
                  transformRequest: fd
                }).success(success);
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
              if($scope.tabs.description === true)
              {
                $state.go('base.venues');
              } else {
                $scope.showTab('description');
              }
            };

            $scope.openMap = function(url) {
              window.open(encodeURI(url), '_system');
            };
        }
    ]);

}).call(this.ee1, this._, window);
