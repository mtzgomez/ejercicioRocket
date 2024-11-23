package com.rocketcode.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rocketcode.entity.Tareas;
import com.rocketcode.service.TareasService;

@RestController
@RequestMapping("/apis")
public class TareasController {

	@Autowired
	private TareasService tareaService;
	
	@GetMapping("/getTareas")
	public List<Tareas> getTareas(){
		//return tareaService.getAllTasks();
		
		Tareas t = new Tareas();
		t.setId(1L);
		t.setNombre("Prueba");
		t.setDescripcion("descripcion");
		t.setFechaInicio(null);
		
		List<Tareas> lista = new ArrayList<>();
		lista.add(t);
		
		return lista;
	}
	
	@PostMapping("/guardarTarea")
	public Tareas guardarTarea(@RequestBody Tareas task) {
		return tareaService.guardarTarea(task);
	}
	
}
