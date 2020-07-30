package com.example.todoList.todo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller // @Rest
@CrossOrigin("*")
@RequestMapping("/api/v1/todoList")
public class TodoController {
    private TodoRepository todoRepository;
    @GetMapping
    @ResponseBody
//    @RequestParam, @RequestBody,
    public List<TodoModel> getTodoList(){
        final List<TodoModel> todoList = todoRepository.getTodoList();
        return todoList;
    }

    @PostMapping
    public int insertTodoList(@RequestBody TodoModel todoModel) {
        try {
            todoRepository.insertTodoList(todoModel);
            return 1;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    @PutMapping
    public int updateTodoList(@RequestBody TodoModel todoModel) {
        try {
            todoRepository.updateTodoList(todoModel);
            return 1;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }

    @DeleteMapping("/{id}")
    public int deleteTodoList(@PathVariable int id){
        try {
            todoRepository.deleteTodoList(id);
            return 1;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }
}
