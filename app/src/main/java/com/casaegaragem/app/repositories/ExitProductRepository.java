package com.casaegaragem.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.casaegaragem.app.entities.ExitProduct;

@Repository
public interface ExitProductRepository extends JpaRepository<ExitProduct, Long> {

}
