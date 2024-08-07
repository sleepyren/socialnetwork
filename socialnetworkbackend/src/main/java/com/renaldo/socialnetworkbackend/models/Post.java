package com.renaldo.socialnetworkbackend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Post {

    private String username;
    private String text;
    private String date;
    private int likes;

    @Id @GeneratedValue
    private int id;


    private Integer bodyImageId;




    public Post() {}

    public Integer getBodyImageId(){
        return bodyImageId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getLikes() {
        return likes;
    }

    public String getDate() {
        return date;
    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Post{" +
                "username='" + username + '\'' +
                ", text='" + text + '\'' +
                ", date='" + date + '\'' +
                ", likes=" + likes +
                ", id=" + id +
                ", bodyImage='" + bodyImageId + '\'' +
                '}';
    }
}
