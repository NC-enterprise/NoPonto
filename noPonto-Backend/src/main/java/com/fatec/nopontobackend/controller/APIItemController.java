package com.fatec.nopontobackend.controller;

import com.fatec.nopontobackend.service.IItemService;
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
@RequestMapping("api/v1/itens")
public class APIItemController {
    Logger logger = LogManager.getLogger(this.getClass());

    @Autowired
    IItemService itemService;

    @CrossOrigin
    @GetMapping
    public ResponseEntity<Object> consultaTodos(){
        logger.info(">>>>>> apicontroller consulta todos");
        return ResponseEntity.status(HttpStatus.OK).body(itemService.consultaItens());
    }
}