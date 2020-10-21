package com.casaegaragem.app.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.casaegaragem.app.entities.Manufacturer;
import com.casaegaragem.app.entities.Product;

public class ProductDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Long codigoBarras;
	private Long referencia;
	private String descricao;
	private String unvenda;
	private String uncompra;
	private Integer quantidadecx;
	private Integer quantidade;
	private Integer giro = 2;
	private Integer estoque_min = 15;
	private Integer estoque_max = 16;
	private Integer media_anual = 17;
	private Integer media_mensal = 18;
	private Integer media_venda = 19;
	private Manufacturer manufacture;
		
	public ProductDTO() {
		
	}

	public ProductDTO(Long id, Long codigoBarras, Long referencia, String descricao, String unvenda, String uncompra,
			Integer quantidadecx, Integer quantidade) {
		this.id = id;
		this.codigoBarras = codigoBarras;
		this.referencia = referencia;
		this.descricao = descricao;
		this.unvenda = unvenda;
		this.uncompra = uncompra;
		this.quantidadecx = quantidadecx;
		this.quantidade = quantidade;
	}
	
	public ProductDTO(Product entity) {
		this.id = entity.getId();
		this.codigoBarras = entity.getCodigoBarras();
		this.referencia = entity.getReferencia();
		this.descricao = entity.getDescricao();
		this.unvenda = entity.getUnvenda();
		this.uncompra = entity.getUncompra();
		this.quantidadecx = entity.getQuantidadecx();
		this.quantidade = entity.getQuantidade();
		this.manufacture = entity.getManufacturer();
	}
	
	public ProductDTO(Product entity, Manufacturer manufacturer) {
		this(entity);
		this.manufacture = manufacturer;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getCodigoBarras() {
		return codigoBarras;
	}

	public void setCodigoBarras(Long codigoBarras) {
		this.codigoBarras = codigoBarras;
	}

	public Long getReferencia() {
		return referencia;
	}

	public void setReferencia(Long referencia) {
		this.referencia = referencia;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getUnvenda() {
		return unvenda;
	}

	public void setUnvenda(String unvenda) {
		this.unvenda = unvenda;
	}

	public String getUncompra() {
		return uncompra;
	}

	public void setUncompra(String uncompra) {
		this.uncompra = uncompra;
	}

	public Integer getQuantidadecx() {
		return quantidadecx;
	}

	public void setQuantidadecx(Integer quantidadecx) {
		this.quantidadecx = quantidadecx;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}
	
	public Integer getGiro() {
		return giro * quantidade;
	}

	public Integer getEstoque_min() {
		return estoque_min;
	}

	public Integer getEstoque_max() {
		return estoque_max;
	}

	public Integer getMedia_anual() {
		return media_anual;
	}

	public Integer getMedia_mensal() {
		return media_mensal;
	}

	public Integer getMedia_venda() {
		return media_venda;
	}
	
	public Manufacturer getManufacture() {
		return manufacture;
	}

	public void setManufacture(Manufacturer manufacture) {
		this.manufacture = manufacture;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProductDTO other = (ProductDTO) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
	
	
}
