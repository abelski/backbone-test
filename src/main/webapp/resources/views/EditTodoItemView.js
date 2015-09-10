define(['Backbone', 'Underscore', 'jQuery', 'text!templates/editmodal.html'], function (Backbone, _, $, modalTemplate) {
    return Backbone.View.extend({
        initialize: function (options) {
            _.bindAll(this, 'render');
            this.render();
            this.model = options.model;
        },
        events: {
            "submit": "save",
            "click #close": "close",
        },

        save: function () {
            alert('savw');
            this.closeForm(this);
        },
        close: function closeform() {
            this.closeForm(this);
        },

        closeForm: function () {
            this.$el.html("");
        },

        render: function () {
            var model = this.model;
            var template = _.template(modalTemplate);
            this.$el.html(template({"model": model}));
            return this;
        }
    });
})
;

