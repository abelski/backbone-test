define('ToDoCollection',['Backbone', '../models/ToDoModel'],function(Backbone, ToDoModel){
    return Backbone.Collection.extend({
        model: ToDoModel,
        url: './todo/',

        initialize: function (options) {
            this.on("all", function(eventName){
                console.log(eventName + ' was triggered!');
            });
        }
    });
});
