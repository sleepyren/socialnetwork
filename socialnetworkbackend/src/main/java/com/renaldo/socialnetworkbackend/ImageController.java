package com.renaldo.socialnetworkbackend;

import com.renaldo.socialnetworkbackend.models.Image;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;

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
    @PostMapping(value = "/imgupload/")
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

    @GetMapping(value = "/img/{id}" , produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getImage(@PathVariable long id, HttpServletResponse response) {
        Image i = repository.findImageById(id);
        if (i == null) {
            response.setStatus(404);
            return null;
        }
        response.setStatus(HttpServletResponse.SC_OK);
        return i.getData();

    }

    @PostMapping("/deleteimg")
    public void deleteImage(@RequestBody long id, HttpServletResponse response) {
        Image i = repository.findImageById(id);
        if (i == null) {
            response.setStatus(404);
            return;
        }
        repository.delete(i);
        response.setStatus(204);
    }
}
