package com.example.stockwise.repository;

import com.example.stockwise.entity.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface VendorRepository extends JpaRepository<Vendor,String> {

    @Query("SELECT v FROM Vendors v WHERE 1=1")
    List<Vendor> getAllVendors();

    @Query("SELECT v FROM Vendors v WHERE v.vendorId = ?1")
    Vendor findByVendorId(String vendorId);
}
