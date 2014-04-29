(function(_, undefined) {
    'use strict';
    
    var Venue = this.Models.Venue;

    function Mapper($sce) {
        
        function mapOne(data) {
            var venue = new Venue();
            
            venue.id = data.id;
            venue.title = $sce.trustAsHtml(data.title);
            venue.capacity = data.capacity;
            venue.images = data.images;
            venue.description = $sce.trustAsHtml(data.description);
            venue.county = data.county;
            venue.city = data.city;
            venue.area = data.area;
            venue.map = data.map;

            return venue;
        }
                
        function map(data) {
            return _.map(data, mapOne);
        }
        
        function meta(counties, capacities) {
            return {
                counties: counties,
                capacities: capacities
            };
        }

        return {
            mapOne: mapOne,
            map: map,
            meta: meta
        };
    }
    
    this.extend('Mappers.Venues', Mapper);

}).call(this.ee1, this._);