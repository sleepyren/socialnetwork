package com.renaldo.socialnetworkbackend;

import com.renaldo.socialnetworkbackend.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PostRepo extends JpaRepository<Post, Long> {

    List<Post> findByUsername(String username);

    Post findById(long id);

}
