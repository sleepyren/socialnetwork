package com.renaldo.socialnetworkbackend;

import com.renaldo.socialnetworkbackend.models.Image;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class ImageController {

    private ImageRepo repository;

    ImageController(ImageRepo repository) {
        this.repository = repository;
    }

    public void sendIOError(HttpServletResponse res) {
        try {
            res.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    @Transactional
    @PostMapping(value = "/imgupload")
    public long uploadImage(MultipartFile file, HttpServletResponse response)  {
        Image image;
        try {
            //getBytes throws IOException
            image = new Image(file.getName(), file.getBytes());
            image = repository.save(image);
        } catch (IOException e) {
            sendIOError(response);
            return -1;
        }
        response.setStatus(HttpServletResponse.SC_OK);
        return image.getId();
    }
}
