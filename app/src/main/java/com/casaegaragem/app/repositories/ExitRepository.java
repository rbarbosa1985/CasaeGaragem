package com.casaegaragem.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.casaegaragem.app.entities.Exit;

@Repository
public interface ExitRepository extends JpaRepository<Exit, Long> {

}
