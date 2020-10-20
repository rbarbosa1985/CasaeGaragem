package com.casaegaragem.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.casaegaragem.app.entities.Input;

@Repository
public interface InputRepository extends JpaRepository<Input, Long> {

}
