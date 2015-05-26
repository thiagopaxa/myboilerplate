;(function() {
  'use strict';
  MyApp.Models.Example = Backbone.Model.extend({

    defaults: {
      name    : 'Boiler',
      status  : 'ok',
      kind    : 'code'
    },

    initialize : function() {
      console.log(this.toJSON());
    },

    validate : function(attrs) {
      if (attrs.name === 'something') {
        return 'what, that\'s no name!';
      }
    }

  });
})();