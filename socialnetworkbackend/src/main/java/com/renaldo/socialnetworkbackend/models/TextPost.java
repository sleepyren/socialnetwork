package com.renaldo.socialnetworkbackend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Entity
public class TextPost {

    private String username;
    private String text;
    private String date;
    private int likes;
    private String profileImageLink;
    @Id @GeneratedValue
    private int id;


    public TextPost(String username, String text, String date, int likes, String profileImageLink) {
        this.username = username;
        this.text = text;
        this.date = date;
        this.likes = likes;
        this.profileImageLink = profileImageLink;
    }

    public TextPost() {

    }

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
}
