(function(ng, undefined) {
    'use strict';
   
    var module = ng.module('Base', [
        'ui.router'
    ]);
    
    module.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('base', {
                url: '',
                abstract: true,
                views: {
                    'footer': {
                        templateUrl: 'views/footer.html',
                        controller: 'Footer'
                    }
                }
            })

            .state('base.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'views/home.html',
                        controller: 'Home'
                    }
                }    
            });
    });
    
    this.extend('Base', module);

}).call(this.ee1, this.angular);