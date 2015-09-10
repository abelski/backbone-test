define(['Backbone', 'Underscore', 'jQuery', 'text!templates/rowtemplate.html', 'views/EditTodoItemView'], function (Backbone, _, $, rowtemplate, EditView) {
    return Backbone.View.extend({
        initialize: function (options) {
            _.bindAll(this, 'render');
            this.render();
            this.model = options.model;
        },
        events: {
            "click #edit": "edit",
            "click #delete": "delete",
        },

        edit: function () {
            var view = new EditView({'model': this.model});
            $("#modal").append(view.render().$el);
        },

        delete: function () {
            alert("delete");
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

