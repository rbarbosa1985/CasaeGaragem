package com.casaegaragem.app.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.casaegaragem.app.entities.Product;
import com.casaegaragem.app.entities.reports.Providers;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	@Query(value = "SELECT COALESCE(SUM(ip.QTD_ITENS), 0) as QtdYear "
			+ "FROM TB_EXITPRODUCT as ip,  TB_EXIT  as i "
			+ "WHERE ip.EXIT_ID  = i.ID "
			+ "and ip.PRODUCT_ID = :ID_PROD "
			+ "and i.date > (SELECT DATEADD(Month, -1, :date)) "
			+ "and i.date < :date", nativeQuery = true)
	Integer mes(Integer ID_PROD, String date);

	@Query(value = "SELECT COALESCE(SUM(ip.QTD_ITENS), 0) as QtdYear "
			+ "FROM TB_EXITPRODUCT as ip,  TB_EXIT  as i "
			+ "WHERE ip.EXIT_ID  = i.ID "
			+ "and ip.PRODUCT_ID = :ID_PROD "
			+ "and i.date > (SELECT DATEADD(Month, -2, :date)) "
			+ "and i.date < (SELECT DATEADD(Month, -1, :date))", nativeQuery = true)
	Integer mes2(Integer ID_PROD, String date);
	
	@Query(value = "SELECT COALESCE(SUM(ip.QTD_ITENS), 0) as QtdYear "
			+ "FROM TB_INPUTPRODUCT as ip,  TB_INPUT  as i "
			+ "WHERE ip.INPUT_ID  = i.ID "
			+ "and ip.PRODUCT_ID = :ID_PROD "
			+ "and i.date > (SELECT DATEADD(Month, -1, :date)) "
			+ "and i.date < :date", nativeQuery = true)
	Integer mesSaida(Integer ID_PROD, String date);
	
	@Query(value = "SELECT COALESCE(SUM(ip.QTD_ITENS), 0) as QtdYear "
			+ "FROM TB_INPUTPRODUCT as ip,  TB_INPUT  as i "
			+ "WHERE ip.INPUT_ID  = i.ID "
			+ "and ip.PRODUCT_ID = :ID_PROD "
			+ "and i.date > (SELECT DATEADD(Month, -2, :date)) "
			+ "and i.date < (SELECT DATEADD(Month, -1, :date))", nativeQuery = true)
	Integer mes2Saida(Integer ID_PROD, String date);
	
	@Query(value = "SELECT COUNT (*) AS FREQ "
	+ "FROM TB_EXITPRODUCT   as ip, TB_EXIT  as i "
	+ "WHERE ip.EXIT_ID  = i.ID and ip.PRODUCT_ID = :ID_PROD "
	+ "and i.date > (SELECT DATEADD(Month, -1, :date)) "
	+ "and i.date < :date", nativeQuery = true)
	Integer frequencia(Integer ID_PROD, String date);
	
	@Query(value = "SELECT COALESCE(SUM(ip.QTD_ITENS), 0) as QtdYear "
			+ "FROM TB_EXITPRODUCT as ip,  TB_EXIT  as i "
			+ "WHERE ip.EXIT_ID  = i.ID "
			+ "and ip.PRODUCT_ID = :ID_PROD "
			+ "and i.date > (SELECT DATEADD(Month, -3, :date)) "
			+ "and i.date < :date", nativeQuery = true)
	Integer media(Integer ID_PROD, String date);
	
	@Query(value = "SELECT COALESCE(SUM(ip.QTD_ITENS), 0) as QtdEntrada "	
			+ "FROM TB_EXITPRODUCT as ip, TB_EXIT  as i "
			+ "WHERE ip.EXIT_ID = i.ID and ip.PRODUCT_ID = :ID_PROD "
			+ "and i.date Like :year||'%' ", nativeQuery = true)	
	Integer anoanterior(Integer ID_PROD, String year);
	
	@Query(value = "select pr.name, i.provider_id, pr.tempo "
			+ "from tb_provider as pr, tb_input as i, tb_inputproduct as ip, tb_product as p "
			+ "where p.id = ip.product_id "
			+ "and i.id = ip.input_id "
			+ "and pr.id = i.provider_id "
			+ "and p.id = :ID_PROD "
			+ "order by i.DATE desc", nativeQuery = true)
	List<Providers> providers(Integer ID_PROD);
	
	@Query(value = "SELECT P.* "
	+ "FROM TB_PRODUCT AS P, TB_MANUFACTURER AS M, TB_PROVIDER AS PR, TB_INPUT AS I, TB_INPUTPRODUCT AS IP "
	+ "WHERE P.ID = IP.PRODUCT_ID " 
	+ "AND IP.INPUT_ID = I.ID " 
	+ "AND I.PROVIDER_ID = PR.ID "
	+ "AND LOWER(PR.NAME) LIKE LOWER('%'||:provider||'%') "
	+ "AND LOWER(P.DESCRICAO) LIKE LOWER('%'||:product||'%') " 
	+ "AND P.MANUFACTURER_ID = M.ID " 
	+ "AND LOWER(M.NAME) LIKE LOWER('%'||:manufacture||'%') "
	+ "GROUP BY P.ID ", nativeQuery=true)
	Page<Product> filters(String provider,String product,String manufacture, Pageable pageRequest);
	
	@Query(value = "SELECT P.* "
			+ "FROM TB_PRODUCT AS P, TB_MANUFACTURER AS M, TB_PROVIDER AS PR, TB_INPUT AS I, TB_INPUTPRODUCT AS IP "
			+ "WHERE P.ID = IP.PRODUCT_ID " 
			+ "AND IP.INPUT_ID = I.ID " 
			+ "AND I.PROVIDER_ID = PR.ID "
			+ "AND LOWER(PR.NAME) LIKE LOWER('%'||:provider||'%') "
			+ "AND LOWER(P.DESCRICAO) LIKE LOWER('%'||:product||'%') " 
			+ "AND P.MANUFACTURER_ID = M.ID " 
			+ "AND LOWER(M.NAME) LIKE LOWER('%'||:manufacture||'%') "
			+ "GROUP BY P.ID ", nativeQuery=true)
	List<Product> filtersPdf(String provider,String product,String manufacture);
}
