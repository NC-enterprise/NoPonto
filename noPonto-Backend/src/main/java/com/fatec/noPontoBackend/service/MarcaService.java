package com.fatec.noPontoBackend.service;

import com.fatec.noPontoBackend.model.IMarcaRepository;
import com.fatec.noPontoBackend.model.Marca;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MarcaService implements IMarcaService{

    @Autowired
    IMarcaRepository repositoryM;

    @Override
    public List<Marca> consultaMarca(){return repositoryM.findAll(); }

    @Override
    public Optional<Marca> consultaPorId(Long id){return Optional.empty();}
}
