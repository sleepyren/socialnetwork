package com.renaldo.socialnetworkbackend;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

//@Component
public class UserAgentFilter extends OncePerRequestFilter {

    private static final List<String> BLOCKED_USER_AGENTS = Arrays.asList(
            "Mozilla", "Chrome", "Safari", "Edge", "Trident" // Add other common browser identifiers if necessary
    );


    @Override
    public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException {

        String userAgent = request.getHeader("User-Agent");
        if (userAgent != null && isBlockedUserAgent(userAgent)) {
            response.sendError(HttpServletResponse.SC_FORBIDDEN, "Access Denied");
            return;
        }

        filterChain.doFilter(request, response);
    }


    private boolean isBlockedUserAgent(String userAgent) {
        return BLOCKED_USER_AGENTS.stream().anyMatch(userAgent::contains);
    }
}
