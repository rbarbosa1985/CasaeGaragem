package com.casaegaragem.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.casaegaragem.app.dto.ProductDTO;
import com.casaegaragem.app.entities.Product;
import com.casaegaragem.app.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;

	@Transactional(readOnly = true)
	public Page<ProductDTO> findAllPaged(PageRequest pageRequest) {
		Integer quantity = 0;
		Integer quantity2 = 0;
		
		Page<Product> list = repository.findAll(pageRequest);
		
		quantity = repository.quantityInput(1).getQtdEntrada();
		quantity2 = repository.quantityExit(1).getQtdSaida();
		
		System.out.println(quantity);
		System.out.println(quantity2);
		
		return list.map(x -> new ProductDTO(x, repository.providers(x.getId())));
	}
	
	
}
