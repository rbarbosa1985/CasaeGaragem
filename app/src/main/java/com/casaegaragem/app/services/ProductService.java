package com.casaegaragem.app.services;

import java.util.ArrayList;
import java.util.List;

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
	public Page<ProductDTO> findByProd(String provider, String product, String manufacture, String date, String date2, PageRequest pageRequest) {
		Page<Product> list = repository.filters(provider, product, manufacture, pageRequest); 
	
		return list.map( x -> new ProductDTO(x, repository.providers(x.getId()), 
				repository.quantityInput(x.getId(),date, date2).getQtdEntrada(), 
				repository.quantityExit(x.getId(),date, date2).getQtdSaida() 
				));
	}
	
	@Transactional(readOnly = true)
	public List<ProductDTO> filtersPdf(String provider, String product, String manufacture, String date, String date2) {
		List<Product> list = repository.filtersPdf(provider, product, manufacture); 
	
		List<ProductDTO> list2 = new ArrayList<>();
		
		list.forEach(x -> list2.add(new ProductDTO(x, repository.providers(x.getId()), 
				repository.quantityInput(x.getId(), date, date2).getQtdEntrada(), 
				repository.quantityExit(x.getId(), date, date2).getQtdSaida() 
				)));
		
		return list2;
	}
		
}
