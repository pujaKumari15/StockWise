package com.example.stockwise.controller;

import com.example.stockwise.config.KeycloakProvider;
import com.example.stockwise.http.requests.CreateUserRequest;
import com.example.stockwise.service.KeycloakAdminClientService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.core.Response;

@RestController
@RequestMapping("/register")
public class RegisterController {
    private final KeycloakAdminClientService kcAdminClient;

    public RegisterController(KeycloakAdminClientService kcAdminClient) {
        this.kcAdminClient = kcAdminClient;
    }

    @PostMapping("/manager")
    public ResponseEntity<String> register(@RequestBody CreateUserRequest user) {
        Response createdResponse = kcAdminClient.createKeycloakUser(user);
        return ResponseEntity.status(createdResponse.getStatus()).build();
    }
}
