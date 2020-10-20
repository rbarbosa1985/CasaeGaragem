package com.casaegaragem.app.entities.pk;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.casaegaragem.app.entities.Input;
import com.casaegaragem.app.entities.Product;

@Embeddable
public class InputProductPK implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@ManyToOne
	@JoinColumn (name = "input_id")
	private Input input;
	
	@ManyToOne
	@JoinColumn (name = "product_id")
	private Product product;

	public Input getInput() {
		return input;
	}

	public void setInput(Input input) {
		this.input = input;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

}
