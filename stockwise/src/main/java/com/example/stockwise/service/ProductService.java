package com.example.stockwise.service;

import com.example.stockwise.dto.ProductDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProductService {
    List<ProductDTO> getInventoryForStore(String storeId);

    ResponseEntity<?> addToInventory(String storeId, ProductDTO productDTO);

    ResponseEntity<?> updateProductQuantity(String storeId, ProductDTO productDTO);
}
