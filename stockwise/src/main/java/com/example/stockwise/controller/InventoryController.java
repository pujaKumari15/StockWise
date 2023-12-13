package com.example.stockwise.controller;

import com.example.stockwise.dto.ProductDTO;
import com.example.stockwise.service.ProductService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/inventory")
public class InventoryController {

    @Autowired
    private ProductService productService;

    @GetMapping(value = "/{storeId}/products")
    public List<ProductDTO> getProducts(@PathVariable("storeId")String storeId) {
        return productService.getInventoryForStore(storeId);
    }

    @PostMapping(value = "/{storeId}/addProductToInventory")
    public ResponseEntity<?> addProductToInventory(@PathVariable("storeId")String storeId,
                                                   @RequestBody ProductDTO productDTO) {
        return productService.addToInventory(storeId,productDTO);

    }

    @PostMapping(value = "/{storeId}/updateProductQuantityInInventory")
    public ResponseEntity<?> updateProductQuantityInInventory(@PathVariable("storeId")String storeId,
                                                              @RequestBody ProductDTO productDTO) {
         return productService.updateProductQuantity(storeId,productDTO);
    }
}
