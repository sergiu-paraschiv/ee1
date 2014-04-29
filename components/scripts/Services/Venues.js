(function(_, Fuse, undefined) {
    'use strict';
    
    var Mapper = this.Mappers.Venues;
    
    var Service = function($sce) {
    
        var mapper = new Mapper($sce);
        var storage = mapper.map(DATA_LOCATIONS);
        var meta = mapper.meta(DATA_ADDRESSES, DATA_CAPACITY);

        var fq = new Fuse(storage, {
          keys: ['title']
        });
        
        var theQuery = {
            title: null,
            county: null,
            city: null,
            area: null,
            capacity: null
        };
    
        function get() {
            var results = storage;
            
            if(theQuery.title && theQuery.title !== '') {
                results = fq.search(theQuery.title);
            }
            
            if(theQuery.county) {
                results = _.filter(results, {county: theQuery.county.name});
            }
            
            if(theQuery.city) {
                results = _.filter(results, {city: theQuery.city.name});
            }
            
            if(theQuery.area) {
                results = _.filter(results, {area: theQuery.area});
            }
            
            if(theQuery.capacity) {
                results = _.filter(results, function(result) {
                    if(result.capacity >= theQuery.capacity.limits[0] && result.capacity <= theQuery.capacity.limits[1]) {
                        return true;
                    }
                    
                    return false;
                });
            }
            
            return results;
        }
        
        function find(id) {
            return _.find(storage, {id: id});
        }
        
        function getQuery() {
            return theQuery;
        }
        
        function getMeta() {
            return meta;
        }

        return {
            get: get,
            find: find,
            getQuery: getQuery,
            getMeta: getMeta
        };
    };
    
    this.Base.service('Venues', ['$sce', Service]);
        
}).call(this.ee1, this._, this.Fuse);