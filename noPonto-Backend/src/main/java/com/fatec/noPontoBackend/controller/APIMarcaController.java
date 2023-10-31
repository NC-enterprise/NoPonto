package com.fatec.noPontoBackend.controller;

import com.fatec.noPontoBackend.service.IItemService;
import com.fatec.noPontoBackend.service.IMarcaService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
