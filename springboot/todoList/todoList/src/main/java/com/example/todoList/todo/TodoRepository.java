package com.example.todoList.todo;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface TodoRepository {
    //TODO 사용하지 않는 정보 삭제
    public List<TodoModel> getTodoList();
    public int insertTodoList(TodoModel todoModel);
    public int updateTodoList(TodoModel todoModel);
    public int deleteTodoList(int id);
}
