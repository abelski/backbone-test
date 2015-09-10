require.config({
    baseUrl: "./",
    paths: {

        jQuery: "//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min",
        Underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
        Backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.2/backbone-min',
        text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
        ModelBinder: "//cdnjs.cloudflare.com/ajax/libs/backbone.modelbinder/1.1.0/Backbone.ModelBinder.min"
    },
    shim: {
        jQuery: {
            exports: 'jQuery',
            init: function () {
                return this.jQuery.noConflict();
            }
        },
        Underscore: {
            exports: '_'
        },
        'Backbone': {
            deps: ['Underscore', 'jQuery'],
            exports: 'Backbone'
        },

    }
});

require(['jQuery', "Underscore", "Backbone", "collections/ToDoCollection", "views/AppView"], function ($, _, Backbone, ToDoCollection, AppView) {
    $(document).ready(function () {
        console.log("ready!");
        var view = new AppView({el: $("#view")});
    });
})