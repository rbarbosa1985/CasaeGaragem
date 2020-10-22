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
		Page<Product> list = repository.findAll(pageRequest); 
		
		Integer quantity = repository.quantityYear(1, "2020-01-01", "2020-12-12").getQtdYear();
				
		System.out.println("Quantidade por data:" + quantity);
		
		return list.map( x -> new ProductDTO(x, repository.providers(x.getId()), 
				repository.quantityInput(x.getId()).getQtdEntrada(), 
				repository.quantityExit(x.getId()).getQtdSaida() 
				));
	}
	
		
}
