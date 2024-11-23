package com.rocketcode.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rocketcode.entity.Tareas;

public interface TareasRepo extends JpaRepository<Tareas, Long> {

}
