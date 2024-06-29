package com.renaldo.socialnetworkbackend;

import com.renaldo.socialnetworkbackend.models.Image;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;


@RestController
public class ImageController {


    @Value("${MAX_IMAGE_SIZE}")
    long MAX_IMAGE_SIZE;

    private ImageRepo repository;

    @Autowired
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


    //compress image until it is within the byte limit
    public byte[] resizeImage(MultipartFile file) throws IOException {
        //my max image size is 7 MB (7 * 1024 * 1024)

        long imageSize = file.getSize();
        if (imageSize <= MAX_IMAGE_SIZE)
            return file.getBytes();

        BufferedImage image = ImageIO.read(file.getInputStream());

        byte[] rawBytes = null;
        while (imageSize > MAX_IMAGE_SIZE) {
            int newWidth =  image.getWidth()/2;
            int newHeight = image.getHeight()/2;

            BufferedImage resizedImage = new BufferedImage(newWidth, newHeight, image.getType());
            Graphics2D g = resizedImage.createGraphics();
            g.drawImage(image.getScaledInstance(newWidth, newHeight, image.getType()),
                    0, 0, newWidth, newHeight, null);

            ByteArrayOutputStream stream = new ByteArrayOutputStream();
            ImageIO.write(resizedImage, "jpeg", stream);
            rawBytes = stream.toByteArray();
            image = resizedImage;
            imageSize = rawBytes.length;
        }
        return rawBytes;
    }

    @Transactional
    @PostMapping(value = "/imgupload")
    public long uploadImage(MultipartFile file, HttpServletResponse response)  {
        Image image;
        try {
            //getBytes throws IOException
            image = new Image(file.getName(), resizeImage(file));
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
