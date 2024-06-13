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
    private String profileImageLink;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBodyImage() {
        return bodyImage;
    }

    public void setBodyImage(String bodyImage) {
        this.bodyImage = bodyImage;
    }

    @Id @GeneratedValue
    private int id;
    private String bodyImage;

    //for creating text posts; they will not have a body image
    public Post(String username, String text, String date, int likes, String profileImageLink) {
        this.username = username;
        this.text = text;
        this.date = date;
        this.likes = likes;
        this.profileImageLink = profileImageLink;
    }
    // for creating image posts without text in body
    public Post(String username, String date, int likes, String profileImageLink, String bodyImage) {
        this.username = username;
        this.date = date;
        this.likes = likes;
        this.profileImageLink = profileImageLink;
        this.bodyImage = bodyImage;
    }

    //for creating image posts with text in body
    public Post(String username, String text, String date, int likes, String profileImageLink, String bodyImage) {
        this.username = username;
        this.text = text;
        this.date = date;
        this.likes = likes;
        this.profileImageLink = profileImageLink;
        this.bodyImage = bodyImage;
    }

    public Post() {}

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public String getProfileImageLink() {
        return profileImageLink;
    }

    public void setProfileImageLink(String profileImageLink) {
        this.profileImageLink = profileImageLink;
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

    @Override
    public String toString() {
        return "Post{" +
                "username='" + username + '\'' +
                ", text='" + text + '\'' +
                ", date='" + date + '\'' +
                ", likes=" + likes +
                ", profileImageLink='" + profileImageLink + '\'' +
                ", id=" + id +
                ", bodyImage='" + bodyImage + '\'' +
                '}';
    }
}
