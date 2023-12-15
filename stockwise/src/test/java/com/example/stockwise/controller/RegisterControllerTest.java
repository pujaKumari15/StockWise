package com.example.stockwise.controller;

import com.example.stockwise.http.requests.CreateUserRequest;
import com.example.stockwise.service.KeycloakAdminClientService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import javax.ws.rs.core.Response;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class RegisterControllerTest {

    @Mock
    private KeycloakAdminClientService kcAdminClient;

    @InjectMocks
    private RegisterController registerController;

    @BeforeEach
    public void setUp() {
    }

    @Test
    public void testRegister() {
        CreateUserRequest userRequest = new CreateUserRequest();
        Response mockResponse = Response.status(Response.Status.CREATED).build();
        when(kcAdminClient.createKeycloakUser(userRequest)).thenReturn(mockResponse);
        ResponseEntity<String> response = registerController.register(userRequest);
        assertEquals(Response.Status.CREATED.getStatusCode(), response.getStatusCodeValue());
    }
}

