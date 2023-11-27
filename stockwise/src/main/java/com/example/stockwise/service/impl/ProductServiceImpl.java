package com.example.stockwise.service.impl;

import com.example.stockwise.dto.ProductDTO;
import com.example.stockwise.entity.Categories;
import com.example.stockwise.entity.Product;
import com.example.stockwise.entity.Product_Categories;
import com.example.stockwise.repository.CategoriesRepository;
import com.example.stockwise.repository.ProductRepository;
import com.example.stockwise.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final CategoriesRepository categoriesRepository;

    public ProductServiceImpl(ProductRepository productRepository, CategoriesRepository categoriesRepository) {
        this.productRepository = productRepository;
        this.categoriesRepository = categoriesRepository;
    }

    @Override
    public List<ProductDTO> getInventoryForStore(String storeId) {

        return productRepository.findByStoreId(storeId).stream().map(product ->
                new ProductDTO(product.getProductId(),product.getProductName(), product.getBrand(),
                        Product_Categories.valueOf(
                                categoriesRepository.findByCategoryId(product.getCategoryId()).getCategoryName()),
                product.getQuantity(), product.getExpiryDate())).toList();
    }

    @Override
    public ResponseEntity<?> addToInventory(String storeId,ProductDTO productDTO) {
         Product product = new Product();
         product.setProductId(UUID.randomUUID().toString());
         product.setStoreId(storeId);
         product.setCategoryId(categoriesRepository.findByCategoryName(productDTO.getCategory().toString()).getCategoryId());
         product.setProductName(productDTO.getName());
         product.setBrand(productDTO.getBrand());
         product.setQuantity(productDTO.getQuantity());
         product.setExpiryDate(productDTO.getExpiryDate());
         productRepository.save(product);
         return new ResponseEntity<>( "Item added", HttpStatus.CREATED);

    }

    @Override
    public ResponseEntity<?> updateProductQuantity(String storeId,ProductDTO productDTO) {
        Product product = productRepository.findByProductId(productDTO.getId());
        if(product != null){
            product.setQuantity(productDTO.getQuantity());
            productRepository.save(product);
        }
        return new ResponseEntity<>( "Product Updated", HttpStatus.CREATED);
    }
}
