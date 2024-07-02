package com.renaldo.socialnetworkbackend.models;

public class PostWithImageId {
    private Post post;
    private long imageId;


    public PostWithImageId(Post post, long imageId) {
        this.post = post;
        this.imageId = imageId;
    }


    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public long getImageId() {
        return imageId;
    }

    public void setImageId(long imageId) {
        this.imageId = imageId;
    }

}
