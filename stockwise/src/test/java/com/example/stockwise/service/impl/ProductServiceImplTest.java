package com.example.stockwise.service.impl;

import com.example.stockwise.dto.ProductDTO;
import com.example.stockwise.entity.Categories;
import com.example.stockwise.entity.Product;
import com.example.stockwise.entity.Product_Categories;
import com.example.stockwise.repository.CategoriesRepository;
import com.example.stockwise.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.InjectMocks;

import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.sql.Date;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;


public class ProductServiceImplTest {
    @Mock
    private ProductRepository productRepository;

    @Mock
    private CategoriesRepository categoriesRepository;

    @InjectMocks
    private ProductServiceImpl productService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void testGetInventoryForStore() {
        // Arrange
        String storeId = "123";
        Product product = new Product();
        product.setProductId(UUID.randomUUID().toString());
        product.setProductName("Product1");
        product.setBrand("Brand1");
        product.setCategoryId(1);
        product.setQuantity(10);
        product.setExpiryDate(Date.valueOf("2023-01-01"));

        when(productRepository.findByStoreId(storeId)).thenReturn(Collections.singletonList(product));
        when(categoriesRepository.findByCategoryId(1)).thenReturn(new Categories(1, "DAIRY"));

        // Act
        List<ProductDTO> result = productService.getInventoryForStore(storeId);

        // Assert
        assertEquals(1, result.size());
        assertEquals("Product1", result.get(0).getName());
        assertEquals("Brand1", result.get(0).getBrand());
        assertEquals(Product_Categories.valueOf("DAIRY"), result.get(0).getCategory());
        assertEquals(10, result.get(0).getQuantity());
        assertEquals(Date.valueOf("2023-01-01"), result.get(0).getExpiryDate());
    }

    @Test
    void testAddToInventory() {
        // Arrange
        String storeId = "123";
        ProductDTO productDTO = new ProductDTO();
        productDTO.setName("Product1");
        productDTO.setBrand("Brand1");
        productDTO.setCategory(Product_Categories.valueOf("DAIRY"));
        productDTO.setQuantity(10);
        productDTO.setExpiryDate(Date.valueOf("2023-01-01"));

        when(categoriesRepository.findByCategoryName(any())).thenReturn(new Categories(1, "DAIRY"));

        ResponseEntity<?> responseEntity = productService.addToInventory(storeId, productDTO);

        assertEquals(ResponseEntity.status(HttpStatus.CREATED).body("Item added"), responseEntity);
        verify(productRepository, times(1)).save(any());
    }

    @Test
    void testUpdateProductQuantity() {
        // Arrange
        String storeId = "123";
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(UUID.randomUUID().toString());
        productDTO.setQuantity(15);

        Product existingProduct = new Product();
        existingProduct.setProductId(productDTO.getId());
        existingProduct.setQuantity(10);

        when(productRepository.findByProductId(productDTO.getId())).thenReturn(existingProduct);

        ResponseEntity<?> responseEntity = productService.updateProductQuantity(storeId, productDTO);

        assertEquals(ResponseEntity.status(HttpStatus.CREATED).body("Product Updated"), responseEntity);
        verify(productRepository, times(1)).save(any());
    }

}