package com.casaegaragem.app.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.casaegaragem.app.entities.Manufacturer;
import com.casaegaragem.app.entities.Product;
import com.casaegaragem.app.entities.reports.Providers;

public class ProductDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private Integer codigoBarras;
	private Integer referencia;
	private String descricao;
	private String unvenda;
	private String uncompra;
	private Integer quantidadecx;
	private Integer quantidade;
	private Double giro = 0.0;
	private Double estoque_min = 0.0;
	private Double estoque_max = 0.0;
	private Double media_anual = 0.0;
	private Double media_mensal = 0.0;
	private Double media_venda = 0.0;
	private Manufacturer manufacture;
	private List<ProviderDTO> providers = new ArrayList<>();
		
	public ProductDTO() {
		
	}

	public ProductDTO(Integer id, Integer codigoBarras, Integer referencia, String descricao, String unvenda, String uncompra,
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
	
	public ProductDTO(Product entity, List<Providers> providers, Integer qtdEntrada, Integer qtdEntrada2 , Integer qtdSaida, Integer qtdMensal, Integer frequencia, Integer anoanterior) {
		this(entity);
		
		Double auxiliar = 0.0;
		
		System.out.println("Produto: " + entity.getId() + " Entrada: " + qtdEntrada);
		System.out.println("Produto: " + entity.getId() + " Entrada: " + qtdEntrada2);
		System.out.println("Produto: " + entity.getId() + " Saida: " + qtdSaida);
		System.out.println("Produto: " + entity.getId() + " Mensal: " + qtdMensal);
		System.out.println("Produto: " + entity.getId() + " Tempo: " + providers.get(0).getTempo());
		System.out.println("Produto: " + entity.getId() + " Frequencia: " + frequencia);
		
		
		providers.forEach(prov -> this.providers.add(new ProviderDTO(prov.getProvider_id(), prov.getName(), prov.getTempo())));
		if ((providers.size() != 0) && (qtdEntrada != 0) && (providers.get(0).getTempo() != 0))
		{
			auxiliar = ((double) (qtdSaida))/30;
			System.out.println("Auxiliar: " + auxiliar);
			this.estoque_min = (auxiliar)*providers.get(0).getTempo();
			
			this.estoque_max = (((auxiliar)/(auxiliar/frequencia))) + this.estoque_min;
			
			auxiliar = 0.0;
			
			auxiliar = ((double)(qtdEntrada2+qtdEntrada))/2;
			
			this.media_venda = ((double) (qtdMensal))/90;
			this.giro = ((double) qtdSaida)/auxiliar;
			this.media_anual = ((double)anoanterior)/12;
			this.media_mensal = ((double) (qtdMensal))/3;
		}
		
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
	
	public Double getGiro() {
		return giro;
	}

	public Double getEstoque_min() {
		return estoque_min;
	}

	public Double getEstoque_max() {
		return estoque_max;
	}

	public Double getMedia_anual() {
		return media_anual;
	}

	public Double getMedia_mensal() {
		return media_mensal;
	}

	public Double getMedia_venda() {
		return media_venda;
	}
	
	public String getManufacture() {
		return manufacture.getName();
	}

	public void setManufacture(Manufacturer manufacture) {
		this.manufacture = manufacture;
	}

	public String getProvider1() {
		return providers.get(0).getName();
	}
	
	public String getProvider2() {
		return providers.get(1).getName();
	}
	
	public String getProvider3() {
		return providers.get(2).getName();
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
