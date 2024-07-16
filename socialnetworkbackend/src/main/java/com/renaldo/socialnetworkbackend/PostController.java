package com.renaldo.socialnetworkbackend;

import com.renaldo.socialnetworkbackend.models.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.renaldo.socialnetworkbackend.models.PostWithProfileId;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PostController {


    private final PostRepo PostRepository;
    private final ImageRepo ImageRepository;
    /*
    Why do I have this constructor? Because field injection like I learned it
    is not recommended anymore. This makes sure that object can
    never be null since it instantiated with a real obj*/
    @Autowired
    public PostController(PostRepo PostRepo, ImageRepo ImageRepo) {
        this.PostRepository = PostRepo;
        this.ImageRepository = ImageRepo;
    }


    @GetMapping(value = "/allposts")
    public List<PostWithProfileId> printAll()
    {
        List<Post> PostList =  PostRepository.findAll();
        List<PostWithProfileId> postWithProfileIdList = new ArrayList<>();
        for (Post post : PostList) {
            long userProfileImageId = ImageRepository.findImageIdByProfileImageOf(post.getUsername());
            postWithProfileIdList.add(new PostWithProfileId(post, userProfileImageId));
        }
        return postWithProfileIdList;
    }
    @PostMapping(value = "/save", consumes = "application/json")
    public Post save(@RequestBody Post post)
    {return PostRepository.save(post);}
    

    @GetMapping(value = "/postbyid/{id}")
    public PostWithProfileId findById(@PathVariable Long id)
    {
        Post post = PostRepository.findById(id).orElseThrow(IllegalArgumentException::new);
        return new PostWithProfileId(post, id);
    }

    @GetMapping(value="/postsbyusername/{username}")
    public List<PostWithProfileId> findByUsername(@PathVariable String username)
    { List<Post> posts = PostRepository.findByUsername(username);
        List<PostWithProfileId> postWithProfileIdList = new ArrayList<>();

        for (Post post : posts) {
            long userProfileImageId = ImageRepository.findImageIdByProfileImageOf(post.getUsername());
            postWithProfileIdList.add(new PostWithProfileId(post, userProfileImageId));
    }
        return postWithProfileIdList;
}

    }
