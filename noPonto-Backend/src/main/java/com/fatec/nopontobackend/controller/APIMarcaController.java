package com.fatec.nopontobackend.controller;

import com.fatec.nopontobackend.model.Marca;
import com.fatec.nopontobackend.service.IMarcaService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/marca")
public class APIMarcaController {

    Logger logger = LogManager.getLogger(this.getClass());

    @Autowired
    IMarcaService marcaService;

    @CrossOrigin
    @GetMapping
    public ResponseEntity<Object> consultaTodos(){
        logger.info(">>>>>> apicontroller consulta todos");
        return ResponseEntity.status(HttpStatus.OK).body(marcaService.consultaMarca());
    }

    @CrossOrigin
    @PostMapping("/new")
    public ResponseEntity<Object> cadastrarMarca(@RequestBody Marca marca){
        logger.info(">>>>>> apicontroller cadastrar marca iniciado");
        Marca marcaCadastrada = marcaService.cadastrarMarca(marca);
        return ResponseEntity.status(HttpStatus.CREATED).body(marcaCadastrada);
    }

}
