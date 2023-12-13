package com.example.stockwise.config;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Collections;

public class KeycloakRoleConverter implements Converter<Jwt, Collection<GrantedAuthority>> {
    @Override
    public Collection<GrantedAuthority> convert(Jwt jwt) {
        Map<String, Object> realmAccess = (Map<String, Object>) jwt.getClaims().get("realm_access");
        if (realmAccess == null || !realmAccess.containsKey("roles")) {
            return Collections.emptyList();
        }
        Collection<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        ((List<String>) realmAccess.get("roles")).forEach(
                roleName -> grantedAuthorities.add(new SimpleGrantedAuthority("ROLE_" + roleName))
        );
        return grantedAuthorities;
    }
}
