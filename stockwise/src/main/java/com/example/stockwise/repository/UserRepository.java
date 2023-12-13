package com.example.stockwise.repository;

import com.example.stockwise.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // You can define custom queries if you need any
}
