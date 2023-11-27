package com.example.stockwise.controller;

import com.example.stockwise.dto.ProductDTO;
import com.example.stockwise.entity.Product_Categories;
import com.example.stockwise.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.sql.Date;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

public class InventoryControllerTest {

    @Mock
    private ProductService productService;

    @InjectMocks
    private InventoryController inventoryController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetProducts() {
        // Arrange
        String storeId = "123";
        List<ProductDTO> expectedProducts = Collections.singletonList(new ProductDTO(
                "PRD1","Brown bread","Nature's own", Product_Categories.BAKERY,10, Date.valueOf("2023-01-01")));
        when(productService.getInventoryForStore(storeId)).thenReturn(expectedProducts);

        List<ProductDTO> actualProducts = inventoryController.getProducts(storeId);
        assertEquals(expectedProducts, actualProducts);
    }

    @Test
    void testAddProductToInventory() {
        // Arrange
        String storeId = "123";
        ProductDTO productDTO = new ProductDTO(
                "PRD1","Brown bread","Nature's own", Product_Categories.BAKERY,10, Date.valueOf("2023-01-01"));
        when(productService.addToInventory(storeId, productDTO)).thenReturn(ResponseEntity.ok().build());

        ResponseEntity<?> responseEntity = inventoryController.addProductToInventory(storeId, productDTO);

        assertEquals(ResponseEntity.ok().build(), responseEntity);
    }

    @Test
    void testUpdateProductQuantityInInventory() {
        // Arrange
        String storeId = "123";
        ProductDTO productDTO = new ProductDTO(
                "PRD1","Brown bread","Nature's own", Product_Categories.BAKERY,15, Date.valueOf("2023-01-01"));
        when(productService.updateProductQuantity(storeId, productDTO)).thenReturn(ResponseEntity.ok().build());
        ResponseEntity<?> responseEntity = inventoryController.updateProductQuantityInInventory(storeId, productDTO);

        assertEquals(ResponseEntity.ok().build(), responseEntity);
    }

}