package com.renaldo.socialnetworkbackend;

import com.renaldo.socialnetworkbackend.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepo extends JpaRepository<Image, Long> {


    Image findImageById(Long id);

    List<Image> findByName(String name);


}
