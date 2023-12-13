package com.example.stockwise.service;

import com.example.stockwise.config.KeycloakProvider;
import com.example.stockwise.entity.User;
import com.example.stockwise.http.requests.CreateUserRequest;
import com.example.stockwise.repository.UserRepository;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.ws.rs.core.Response;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.Collections;


@Service
public class KeycloakAdminClientService {
    @Value("${keycloak.realm}")
    public String realm;

    private final KeycloakProvider kcProvider;

    private final UserRepository userRepository;


    public KeycloakAdminClientService(KeycloakProvider keycloakProvider, UserRepository userRepository) {
        this.kcProvider = keycloakProvider;
        this.userRepository = userRepository;
    }

    public Response createKeycloakUser(CreateUserRequest user) {
        UsersResource usersResource = kcProvider.getInstance().realm(realm).users();
        CredentialRepresentation credentialRepresentation = createPasswordCredentials(user.getPassword());

        UserRepresentation kcUser = new UserRepresentation();
        kcUser.setUsername(user.getEmail());
        kcUser.setCredentials(Collections.singletonList(credentialRepresentation));
        kcUser.setFirstName(user.getFirstname());
        kcUser.setLastName(user.getLastname());
        kcUser.setEmail(user.getEmail());
        kcUser.setEnabled(true);
        kcUser.setEmailVerified(false);

        Response response = usersResource.create(kcUser);

        if (response.getStatus() == 201) {

            String userId = response.getLocation().getPath().replaceAll(".*/([^/]+)$", "$1");
            // Assign role to user
            assignRoleToUser(usersResource, userId, "employee");

            User localUser = new User();
            localUser.setFirstname(kcUser.getFirstName());
            localUser.setLastname(kcUser.getLastName());
            localUser.setEmail(user.getEmail());
            localUser.setId(userId);
            localUser.setStoreName(user.getStoreName());
            localUser.setStoreAddress(user.getStoreAddress());
            localUser.setStoreContactNumber(user.getStoreContactNumber());
            localUser.setUsername(user.getEmail());
//            usersResource.get(userId).sendVerifyEmail();
            userRepository.save(localUser);
        }
        return response;
    }

    private void assignRoleToUser(UsersResource usersResource, String userId, String roleName) {
        RoleRepresentation role = kcProvider.getInstance().realm(realm).roles().get(roleName).toRepresentation();
        UserResource userResource = usersResource.get(userId);
        userResource.roles().realmLevel().add(Collections.singletonList(role));
    }

    private static CredentialRepresentation createPasswordCredentials(String password) {
        CredentialRepresentation passwordCredentials = new CredentialRepresentation();
        passwordCredentials.setTemporary(false);
        passwordCredentials.setType(CredentialRepresentation.PASSWORD);
        passwordCredentials.setValue(password);
        return passwordCredentials;
    }
}
