package com.renaldo.socialnetworkbackend.models;


import jakarta.persistence.*;

@Entity
public class Image {

    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @Column(nullable = true)
    private String profileImageOf;


    @Lob //Stands for Large Object
    private byte[] data;

    public Image() {}
    public Image(String name, byte[] data) {
        this.name = name;
        this.data = data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public String getProfileImageOf() {
        return profileImageOf;
    }

    public void setProfileImageOf(String profileImageOf) {
        this.profileImageOf = profileImageOf;
    }
}
