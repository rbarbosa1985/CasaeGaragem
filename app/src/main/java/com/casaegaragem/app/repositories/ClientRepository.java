package com.casaegaragem.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.casaegaragem.app.entities.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
