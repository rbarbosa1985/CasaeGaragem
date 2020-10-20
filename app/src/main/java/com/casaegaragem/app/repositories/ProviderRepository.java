package com.casaegaragem.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.casaegaragem.app.entities.Provider;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Long> {

}
