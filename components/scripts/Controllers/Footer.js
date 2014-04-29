(function(undefined) {
    'use strict';
    
    var Config = this.Config;
    
    this.Base.controller('Footer', [
        '$scope',
        
        function($scope) {
            $scope.banner = {
                image: Config.BANNER_IMAGE,
                link: Config.BANNER_LINK
            };
        }
    ]);
        
}).call(this.ee1);
