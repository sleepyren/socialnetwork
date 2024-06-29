package com.renaldo.socialnetworkbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.sql.DataSource;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
//reference : https://www.baeldung.com/spring-security-login
//HTTP SECURITY CLASS: https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/config/annotation/web/builders/HttpSecurity.html
public class SecurityConfiguration {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }


    //Final Methods based on this reference:
    //https://docs.spring.io/spring-security/reference/servlet/exploits/csrf.html
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                //lambda expression inside authorize http requests
                .authorizeHttpRequests((HttpRequests)->
                        HttpRequests
                                        .requestMatchers("/login", "/h2-console", "/error", "/favicon.ico").permitAll()//,"/csrf",
                                .anyRequest().permitAll()
                        // "/h2-console/**").permitAll()
                                //.hasRole("USER")
                )
                //see CsrfController for explanation

                .headers(headers -> headers
                        .frameOptions().sameOrigin())  // Allow frames from the same origin

                //.formLogin(withDefaults());



                .formLogin(form -> form
                .loginPage("/login")
                       .loginProcessingUrl("/login")


    )
        //.addFilterBefore(new UserAgentFilter(), UsernamePasswordAuthenticationFilter.class);
        .csrf().disable();
        return http.build();
    }

    @Bean
    public DataSource dataSource()
    {
        return new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript(JdbcDaoImpl.DEFAULT_USER_SCHEMA_DDL_LOCATION)
                .setName("postsdb")
                .build();
    }

    @Value("${ROOT_USERNAME}")
    String env_username;

    @Value("${ROOT_PASSWORD}")
    String env_password;

    //references: https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/jdbc.html
    //https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/core/userdetails/User.html


    @Bean
    public UserDetailsManager userDatabase(DataSource dataSource, PasswordEncoder encoder)
    {

        UserDetails user = User.withUsername(env_username)
                .password(encoder.encode(env_password))
                .roles("USER")
                .build();

        JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
        //normally this conditional would be important but the table
        //is set to create drop so I know it does not exist for sure
        //if (!users.userExists(env_username)) {
            users.createUser(user);
        //}
        return users;
    }

}
