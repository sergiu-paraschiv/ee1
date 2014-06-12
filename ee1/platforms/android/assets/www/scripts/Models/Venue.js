(function(undefined) {
    'use strict';

    function Venue() {
        this.id = null;
        this.title = null;
        this.capacity = null;
        this.images = [];
        this.description = null;
        this.county = null;
        this.city = null;
        this.area = null;
        this.map = null;
        this.mapLink = null;
    }

    this.extend('Models.Venue', Venue);

}).call(this.ee1);
