package com.renaldo.socialnetworkbackend;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String login() {
        return "forward:/login.html";
    }

    @GetMapping("/loggedin")
    public void isLoggedIn(HttpServletRequest request, HttpServletResponse response)
    {
        request
    }
}
