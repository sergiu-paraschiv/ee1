(function(undefined) {
    'use strict';

    this.Base.controller('Home', [
        '$scope',
        'Venues',

        function($scope, venuesProvider) {
            $scope.meta = venuesProvider.getMeta();
            $scope.query = venuesProvider.getQuery();

            if(!$scope.query.county) {
                $scope.query.county = $scope.meta.counties[0];
                $scope.query.city = $scope.query.county.children[0];
            }
        }
    ]);

}).call(this.ee1);
