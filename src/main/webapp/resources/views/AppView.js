define(['Backbone', 'Underscore', 'views/TodoItemView', 'collections/ToDoCollection', 'jQuery', 'text!templates/tabletemplate.html'], function (Backbone, _, TodoItemView, ToDoCollection, $, tabletemplate) {
    return Backbone.View.extend({
        initialize: function () {
            _.bindAll(this, 'render');
            this.list = new ToDoCollection();
            this.list.on("reset", this.render);
            this.list.fetch({reset: true});
        },


        render: function () {
            var list = this.list;
            var template = _.template(tabletemplate);
            this.$el.html(template(list));
            var $table = this.$el.find($('#tablebody'));
            var self = this;
            this.list.forEach(function (item) {
                var view = new TodoItemView({'model': item});
                $table.append(view.render().$el);
            })
            return this;
        }
    });
});

