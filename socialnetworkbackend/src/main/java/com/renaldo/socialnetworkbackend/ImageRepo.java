package com.renaldo.socialnetworkbackend;

import com.renaldo.socialnetworkbackend.models.Image;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

//annotation explained
//https://stackoverflow.com/questions/3164072/large-objects-may-not-be-used-in-auto-commit-mode
@Transactional
public interface ImageRepo extends JpaRepository<Image, Long> {


    Image findImageById(Long id);

    List<Image> findByName(String name);

    @Query("SELECT i.id FROM Image i WHERE i.profileImageOf = :profileImageOf")
    Long findImageIdByProfileImageOf(@Param("profileImageOf") String profileImageOf);
}
