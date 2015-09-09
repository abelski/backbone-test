define('TodoItemView', ['Backbone', 'Underscore', 'jQuery', 'text!templates/rowtemplate.html'], function (Backbone, _, $, rowtemplate) {
    return Backbone.View.extend({
        initialize: function (options) {
            _.bindAll(this, 'render');
            this.render();
            this.model = options.model;
        },
        events: {
            "dblclick": "dblclick",
        },

        dblclick: function () {
            alert("11");
        },

        tagName: "tr",

        render: function () {
            var model = this.model;
            var template = _.template(rowtemplate);
            this.$el.html(template({"model": model}));
            return this;
        }
    });
})
;

