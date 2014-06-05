(function(window, undefined) {
    'use strict';
    
    var Config = this.Config;
    
    this.Base.controller('Footer', [
        '$scope',
        
        function($scope) {
            $scope.banner = {
                image: Config.BANNER_IMAGE,
                link: Config.BANNER_LINK
            };

            $scope.openLink = function() {
                window.open(encodeURI(Config.BANNER_LINK), '_system');
            };
        }
    ]);
        
}).call(this.ee1, window);
