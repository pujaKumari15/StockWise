package com.example.stockwise.controller;

import com.example.stockwise.config.KeycloakProvider;
import com.example.stockwise.http.requests.CreateUserRequest;
import com.example.stockwise.http.requests.LoginRequest;
import com.example.stockwise.service.KeycloakAdminClientService;
import lombok.Getter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.admin.client.token.TokenManager;
import org.keycloak.representations.AccessTokenResponse;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.ws.rs.BadRequestException;
import javax.ws.rs.core.Response;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserControllerTest {

    @Mock
    private KeycloakAdminClientService kcAdminClient;

    @Mock
    private KeycloakProvider kcProvider;

    @Mock
    private Keycloak keycloak;

    @Mock
    private KeycloakBuilder keycloakBuilder;

    @Mock
    private TokenManager tokenManager;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setUp() {
    }

    @Test
    public void testCreateUser_Success() {
        CreateUserRequest userRequest = new CreateUserRequest();
        Response mockResponse = Response.status(Response.Status.CREATED).build();
        when(kcAdminClient.createKeycloakUser(userRequest)).thenReturn(mockResponse);
        ResponseEntity<?> response = userController.createUser(userRequest);
        assertEquals(HttpStatus.CREATED.value(), response.getStatusCodeValue());
    }

    @Test
    public void testLogin_Success() {
        when(kcProvider.newKeycloakBuilderWithPasswordCredentials(anyString(), anyString())).thenReturn(keycloakBuilder);
        when(keycloakBuilder.build()).thenReturn(keycloak);
        when(keycloak.tokenManager()).thenReturn(tokenManager);
        when(tokenManager.getAccessToken()).thenReturn(new AccessTokenResponse());
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername("user");
        loginRequest.setPassword("pass");
        AccessTokenResponse mockResponse = new AccessTokenResponse();
        when(keycloak.tokenManager().getAccessToken()).thenReturn(mockResponse);
        ResponseEntity<AccessTokenResponse> response = userController.login(loginRequest);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockResponse, response.getBody());
    }

    @Test
    public void testLogin_Failure_BadRequest() {
        when(kcProvider.newKeycloakBuilderWithPasswordCredentials(anyString(), anyString())).thenReturn(keycloakBuilder);
        when(keycloakBuilder.build()).thenReturn(keycloak);
        when(keycloak.tokenManager()).thenReturn(tokenManager);
        when(tokenManager.getAccessToken()).thenReturn(new AccessTokenResponse());
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername("user");
        loginRequest.setPassword("wrongpass");
        when(keycloak.tokenManager().getAccessToken()).thenThrow(new BadRequestException("Bad Request"));
        ResponseEntity<AccessTokenResponse> response = userController.login(loginRequest);
        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }
}
