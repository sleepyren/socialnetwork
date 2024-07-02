package com.renaldo.socialnetworkbackend;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class LoginController {

    private ImageRepo imageRepo;

    @Autowired
    LoginController( ImageRepo imageRepo ) {
        this.imageRepo = imageRepo;
    }

    @GetMapping("/login")
    public String login() {
        return "forward:/login.html";
    }


    @ResponseBody
    @GetMapping("/userdetails")
    public Map<String, Object> isLoggedIn(HttpServletRequest request, HttpServletResponse response)
    {
        String username = request.getUserPrincipal().getName();
        if (username == null)
        {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return null;
        }
        response.setStatus(HttpServletResponse.SC_OK);
        HashMap<String, Object> map = new HashMap<>();
        map.put("username", username);
        map.put("profileImageId", imageRepo.findImageIdByProfileImageOf(username) );
        return map;
    }
}
