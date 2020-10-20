package com.casaegaragem.app.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.casaegaragem.app.entities.pk.InputProductPK;

@Entity
@Table(name = "tb_inputproduct")
public class InputProduct {

	@EmbeddedId
	private InputProductPK id = new InputProductPK();

	private Integer qtdItens;
	
	public InputProduct() {
		
	}

	public InputProduct(Input input, Product product, Integer qtdItens) {
		this.id.setInput(input);
		this.id.setProduct(product);
		this.qtdItens = qtdItens;
	}

	public Input getInput() {
		return id.getInput();
	}

	public void setInput(Input input) {
		this.id.setInput(input);
	}
	
	public Product getProduct() {
		return id.getProduct();
	}

	public void setProduct(Product product) {
		this.id.setProduct(product);
	}

	public Integer getQtdItens() {
		return qtdItens;
	}

	public void setQtdItens(Integer qtdItens) {
		this.qtdItens = qtdItens;
	}
	
}
