package com.casaegaragem.app.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.casaegaragem.app.dto.ProductDTO;
import com.casaegaragem.app.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class ProductResource {
	
	@Autowired
	private ProductService service;
	
	@GetMapping("/pdf/{product}&{provider}&{manufacture}&{date}&{year}")
	public ResponseEntity<List<ProductDTO>> filtersPdf(
			@PathVariable("product") String product,
			@PathVariable("provider") String provider,
			@PathVariable("manufacture") String manufacture,
			@PathVariable("date") String date,
			@PathVariable("year") String year
			) {		
		
		if(product.isEmpty()) {
			product = "";
		}
		if(provider.isEmpty()) {
			provider = "";
		}
		if(manufacture.isEmpty()) {
			manufacture = "";
		}
		if(date.isEmpty()) {
			date = "";
		}
		if(year.isEmpty()) {
			year = "";
		}
		
		
		List<ProductDTO> list = service.filtersPdf(provider, product, manufacture, date, year);	
		return ResponseEntity.ok().body(list);
	}
	
	
	@GetMapping("/fiters/{product}&{provider}&{manufacture}&{date}&{year}")
	public ResponseEntity<Page<ProductDTO>> findByName(
			@PathVariable("product") String product,
			@PathVariable("provider") String provider,
			@PathVariable("manufacture") String manufacture,
			@PathVariable("date") String date,
			@PathVariable("year") String year,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "4") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy
			) {
		
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		
		if(product.isEmpty()) {
			product = "";
		}
		if(provider.isEmpty()) {
			provider = "";
		}
		if(manufacture.isEmpty()) {
			manufacture = "";
		}
		if(date.isEmpty()) {
			date = "";
		}
		if(year.isEmpty()) {
			year = "";
		}
		
		
		Page<ProductDTO> list = service.findByProd(provider, product, manufacture, date, year, pageRequest);	
		return ResponseEntity.ok().body(list);
	}
	
}
