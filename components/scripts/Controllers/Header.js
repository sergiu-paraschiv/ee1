(function(window, undefined) {
    'use strict';

    var Config = this.Config;

    this.Base.controller('Header', [
        '$scope',

        function($scope) {
            $scope.banner = {
                image: Config.HEADER_IMAGE,
                link: Config.HEADER_LINK
            };
        }
    ]);

}).call(this.ee1, window);
