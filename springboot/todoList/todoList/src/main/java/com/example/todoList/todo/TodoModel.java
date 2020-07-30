package com.example.todoList.todo;

import lombok.Data;
// 최소 3개 이상
// 유저 정보, 계좌, 이력
@Data
public class TodoModel {
    int id;
    String title;
    boolean state;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }
}
