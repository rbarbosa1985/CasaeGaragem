package com.casaegaragem.app.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.casaegaragem.app.entities.pk.ExitProductPK;

@Entity
@Table(name = "tb_exitproduct")
public class ExitProduct {

	@EmbeddedId
	private ExitProductPK id = new ExitProductPK();

	private Integer qtdItens;
	
	public ExitProduct() {
		
	}

	public ExitProduct(Exit exit, Product product, Integer qtdItens) {
		this.id.setExit(exit);
		this.id.setProduct(product);
		this.qtdItens = qtdItens;
	}

	public Exit getExit() {
		return id.getExit();
	}

	public void setExit(Exit exit) {
		this.id.setExit(exit);
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
