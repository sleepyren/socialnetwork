package com.renaldo.socialnetworkbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import com.renaldo.socialnetworkbackend.PostRepo;
import com.renaldo.socialnetworkbackend.models.Post;

import java.util.List;

@RestController
public class PostController {

    @Autowired
    PostRepo repository;


    @GetMapping(value = "/printall")
    public List<Post> printAll()
    {
        //System.out.println(post);
        return repository.findAll();
        //return post;
    }
    @PostMapping(value = "/save", consumes = "application/json")
    public Post save(@RequestBody Post post)
    {
        return repository.save(post);
    }

    @GetMapping(value = "/postbyid/{id}")
    public Post findById(@PathVariable Long id)
    {return repository.findById(id).orElseThrow(IllegalArgumentException::new);}

    @GetMapping(value="/postsbyusername/{username}")
    public List<Post> findByUsername(@PathVariable String username)
    {return repository.findByUsername(username);}


}
