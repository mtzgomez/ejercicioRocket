package com.rocketcode.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rocketcode.entity.Tareas;
import com.rocketcode.repository.TareasRepo;

@Service
public class TareasService {

	@Autowired
	private TareasRepo tareaRepository;
	
	public List<Tareas> getAllTasks(){
		return tareaRepository.findAll();
	}
	
	public Tareas guardarTarea(Tareas task) {
		return tareaRepository.saveAndFlush(task);
	}
	
}
