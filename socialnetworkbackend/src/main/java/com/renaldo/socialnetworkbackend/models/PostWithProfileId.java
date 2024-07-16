package com.renaldo.socialnetworkbackend.models;

public class PostWithProfileId {
    public Post post;
    public long profileImageId;


    public PostWithProfileId(Post post, long profileImageId) {
        this.post = post;
        this.profileImageId = profileImageId;
    }



}
