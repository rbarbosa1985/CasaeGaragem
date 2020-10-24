package com.casaegaragem.app.entities.reports;

import org.springframework.data.domain.Page;

import com.casaegaragem.app.entities.Product;

public interface FindProd {
	public Page<Product> getProduct();
}
