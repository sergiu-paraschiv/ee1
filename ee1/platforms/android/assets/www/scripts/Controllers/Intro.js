(function(undefined) {
    'use strict';

    var Config = this.Config;

    this.Base.controller('Intro', [
        '$scope',
        '$timeout',
        '$state',

        function($scope, $timeout, $state) {
            var skipPromise;

            function skip() {
                $timeout.cancel(skipPromise);

                $state.go('base.home');
            }

            skipPromise = $timeout(skip, Config.INTRO_LENGTH);

            $scope.skip = skip;
            $scope.intro = Config.INTRO_IMAGE;
        }
    ]);

}).call(this.ee1);
