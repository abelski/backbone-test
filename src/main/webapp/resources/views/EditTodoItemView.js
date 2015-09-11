define(['Backbone', 'Underscore', 'jQuery', 'text!templates/editmodal.html', 'collections/ToDoCollection'], function (Backbone, _, $, modalTemplate, ToDoCollection) {
    return Backbone.View.extend({
        initialize: function (options) {
            _.bindAll(this, 'render');
            this.render();
            this.model = options.model;

            this.listenTo(this.model,'sync', this.onSuccessCallback);
        },
        events: {
            "submit": "save",
            "click #close": "close",
        },

        onSuccessCallback : function(){
            this.model.fetch();
            this.render();
        },

        save: function () {
            this.model.set("name", $("#modalText").val());
            this.model.save();
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

