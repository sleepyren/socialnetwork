/*
package com.renaldo.socialnetworkbackend;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CsrfController {

    private final HttpSessionCsrfTokenRepository tokenRepository;


    Why do I have this constructor? Because field injection like I learned it
    is not recommended anymore. This makes sure that object can
    never be null since it instantiated with a real obj
    @Autowired
    CsrfController(HttpSessionCsrfTokenRepository repo)
    {
        this.tokenRepository  = repo;
    }

    //reference:
    //https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/csrf/HttpSessionCsrfTokenRepository.html#saveToken(org.springframework.security.web.csrf.CsrfToken,jakarta.servlet.http.HttpServletRequest,jakarta.servlet.http.HttpServletResponse)
    @Get/Mapping("/csrf")
    public CsrfToken getCsrfToken(HttpServletRequest request, HttpServletResponse response) {
        System.out.println(request.toString() + "    Session " + request.getSession().getId());
        CsrfToken token = tokenRepository.loadToken(request);
        //a session is not associated with a token initially.
        //it is sent from the server in a form or header
        if (token == null) {
            token = tokenRepository.generateToken(request);
            tokenRepository.saveToken(token, request, response);
        }
        response.setHeader(token.getHeaderName(), token.getToken());
        return token;
    }
}
*/