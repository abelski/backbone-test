package test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import test.model.Todo;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Artur Belski
 */
@Controller
@RequestMapping("/todo")
public class NotesController {
    @ResponseBody
    @RequestMapping(value = "/")
    public List<Todo> getAll() {
        final ArrayList<Todo> todos = new ArrayList<Todo>();

        todos.add(new Todo("do some",true));
        todos.add(new Todo("do some else",false));
        todos.add(new Todo("do nothing",true));
        todos.add(new Todo("do homework",false));
        todos.add(new Todo("do it",true));

        return todos;
    }

}
