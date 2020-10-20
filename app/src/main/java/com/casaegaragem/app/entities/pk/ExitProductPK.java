package com.casaegaragem.app.entities.pk;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.casaegaragem.app.entities.Exit;
import com.casaegaragem.app.entities.Product;

@Embeddable
public class ExitProductPK implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@ManyToOne
	@JoinColumn (name = "exit_id")
	private Exit exit;
	
	@ManyToOne
	@JoinColumn (name = "product_id")
	private Product product;

	public Exit getExit() {
		return exit;
	}

	public void setExit(Exit exit) {
		this.exit = exit;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	

	

}
