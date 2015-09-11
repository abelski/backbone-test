package test.controller;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import test.model.Todo;

import javax.annotation.PostConstruct;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 * @author Artur Belski
 */
@Controller
@RequestMapping("/todo")
public class NotesController {
    final Map<String, Todo> todos = new HashMap<String, Todo>();

    @PostConstruct
    public void init() {
        todos.put("1", new Todo("1","do some", true));
        todos.put("2", new Todo("2","do some else", false));
        todos.put("3", new Todo("3","do nothing", true));
        todos.put("4", new Todo("4","do homework", false));
        todos.put("5", new Todo("5","do it", true));
    };

    @ResponseBody
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Collection<Todo> getAll() {
        return todos.values();
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void update(@PathVariable String id, @RequestBody Todo todo) {
        todos.put(id,todo);
    }

}
