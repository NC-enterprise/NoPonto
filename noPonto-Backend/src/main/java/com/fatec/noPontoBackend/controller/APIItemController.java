package com.fatec.noPontoBackend.controller;

import com.fatec.noPontoBackend.model.Item;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/items")
public class APIItemController {
    Logger logger = LogManager.getLogger(this.getClass());

    @Autowired
    private Item itemService;

    @CrossOrigin
    @GetMapping
    public ResponseEntity<Object> consultaTodos() {
        logger.info(">>>>>> API ItemController consulta todos");
        List<Item> items = itemService.consultarItens();
        return ResponseEntity.status(HttpStatus.OK).body(items);
    }
}
