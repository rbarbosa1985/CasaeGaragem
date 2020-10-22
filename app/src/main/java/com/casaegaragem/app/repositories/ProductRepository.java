package com.casaegaragem.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.casaegaragem.app.entities.Product;
import com.casaegaragem.app.entities.reports.Providers;
import com.casaegaragem.app.entities.reports.QuantityExit;
import com.casaegaragem.app.entities.reports.QuantityInput;
import com.casaegaragem.app.entities.reports.QuantityYear;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	
	@Query(value = "SELECT COALESCE(SUM(ip.QTD_ITENS), 0) as QtdYear "
			+ "FROM TB_EXITPRODUCT as ip,  TB_EXIT  as i  "
			+ "where ip.EXIT_ID  = i.ID  "
			+ "and ip.PRODUCT_ID = :ID_PROD "
			+ "and i.date > :date "
			+ "and i.date < :date2", nativeQuery = true)
	QuantityYear quantityYear(Integer ID_PROD, String date, String date2);
	
	@Query(value = "SELECT COALESCE(SUM(ip.QTD_ITENS), 0) as QtdEntrada "
			+ "FROM TB_INPUTPRODUCT as ip,  TB_INPUT  as i  "
			+ "where ip.INPUT_ID  = i.ID  "
			+ "and ip.PRODUCT_ID = :ID_PROD "
			+ "and i.date > '2020-05-01' "
			+ "and i.date < '2020-05-31'", nativeQuery = true)
	QuantityInput quantityInput(Integer ID_PROD);
	
	
	@Query(value = "SELECT COALESCE(SUM(ep.QTD_ITENS), 0) as QtdSaida "
			+ "FROM TB_EXITPRODUCT as ep,  TB_EXIT   as e  "
			+ "where ep.EXIT_ID   = e.ID  "
			+ "and ep.PRODUCT_ID = :ID_PROD "
			+ "and e.date > '2020-05-01' "
			+ "and e.date < '2020-05-31'", nativeQuery = true)
	QuantityExit quantityExit(Integer ID_PROD);
	
	
	@Query(value = "select pr.name, i.provider_id, pr.tempo "
			+ "from tb_provider as pr, tb_input as i, tb_inputproduct as ip, tb_product as p "
			+ "where p.id = ip.product_id "
			+ "and i.id = ip.input_id "
			+ "and pr.id = i.provider_id "
			+ "and p.id = :ID_PROD", nativeQuery = true)
	List<Providers> providers(Integer ID_PROD);
	
}
