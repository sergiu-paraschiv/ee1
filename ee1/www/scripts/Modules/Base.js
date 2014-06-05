(function(ng, undefined) {
    'use strict';
   
    var module = ng.module('Base', [
        'ui.router',
        'sf.virtualScroll'
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
            
            .state('base.intro', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'views/intro.html',
                        controller: 'Intro'
                    },
                    'footer@': {
                        templateUrl: 'views/blank.html'
                    }
                }    
            })

            .state('base.home', {
                url: '/home',
                views: {
                    'content@': {
                        templateUrl: 'views/home.html',
                        controller: 'Home'
                    }
                }    
            })
            
            .state('base.venues', {
                url: '/venues',
                views: {
                    'content@': {
                        templateUrl: 'views/venues.html',
                        controller: 'Venues'
                    }
                }
            })
            
            .state('base.venue', {
                url: '/venue/:id',
                views: {
                    'content@': {
                        templateUrl: 'views/venue.html',
                        controller: 'Venue'
                    }
                }    
            });
    });
    
    this.extend('Base', module);

}).call(this.ee1, this.angular);