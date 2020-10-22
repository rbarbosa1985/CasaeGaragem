package com.casaegaragem.app.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

@Entity
@Table(name = "tb_product")
public class Product implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private Integer codigoBarras;
	private Integer referencia;
	private String descricao;
	private String unvenda;
	private String uncompra;
	private Integer quantidadecx;
	private Integer quantidade;
	
	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Instant updatedAt;
	
	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Instant createdAt;
	
	@ManyToOne
	@JoinColumn(name = "manufacturer_id")
	private Manufacturer manufacturer;
	
	@OneToMany
	@JoinColumn(name = "inputproducts_id")
	Set<InputProduct> inputproducts = new HashSet<>();
	
	@OneToMany
	@JoinColumn(name = "exitproducts_id")
	Set<ExitProduct> exitproducts = new HashSet<>();
	
	public Product() {
		
	}
	
	public Product(Integer id, Integer codigoBarras, Integer referencia, String descricao, String unvenda, String uncompra,
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

	public Product(Integer id, Integer codigoBarras, Integer referencia, String descricao, String unvenda, String uncompra,
			Integer quantidadecx, Integer quantidade, Manufacturer manufacturer) {
		super();
		this.id = id;
		this.codigoBarras = codigoBarras;
		this.referencia = referencia;
		this.descricao = descricao;
		this.unvenda = unvenda;
		this.uncompra = uncompra;
		this.quantidadecx = quantidadecx;
		this.quantidade = quantidade;
		this.manufacturer = manufacturer;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCodigoBarras() {
		return codigoBarras;
	}

	public void setCodigoBarras(Integer codigoBarras) {
		this.codigoBarras = codigoBarras;
	}

	public Integer getReferencia() {
		return referencia;
	}

	public void setReferencia(Integer referencia) {
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

	public Manufacturer getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(Manufacturer manufacturer) {
		this.manufacturer = manufacturer;
	}

	public Set<InputProduct> getInputproducts() {
		return inputproducts;
	}

	public Set<ExitProduct> getExitproducts() {
		return exitproducts;
	}

	@PrePersist
	public void prePersist() {
		createdAt = Instant.now();
	}

	@PreUpdate
	public void preUpdate() {
		updatedAt = Instant.now();
	}

}
