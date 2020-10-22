package com.casaegaragem.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.casaegaragem.app.dto.ProductDTO;
import com.casaegaragem.app.entities.Product;
import com.casaegaragem.app.repositories.InputProductRepository;
import com.casaegaragem.app.repositories.InputRepository;
import com.casaegaragem.app.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
	
	@Autowired
	private InputRepository inputRepository;
	
	@Autowired
	private InputProductRepository inputProductRepository;

	@Transactional(readOnly = true)
	public Page<ProductDTO> findAllPaged(PageRequest pageRequest) {
		Page<Product> list = repository.findAll(pageRequest); 
		
		Integer quantity = repository.quantityInput(1).getQtdEntrada();
		Integer quantity2 = repository.quantityExit(1).getQtdSaida();
			
		return list.map( x -> new ProductDTO(x, repository.providers(x.getId()), 
						1 , 1 
						
								));
	}
	
	
}
