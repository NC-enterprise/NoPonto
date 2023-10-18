package com.fatec.noPontoBackend.service;

import com.fatec.noPontoBackend.model.IUserRepository;
import com.fatec.noPontoBackend.model.Users;
import com.fatec.noPontoBackend.model.Users;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    Logger logger = LogManager.getLogger(this.getClass());

    @Autowired
    IUserRepository repositoryU;
    @Override
    public List<Users> consultaUser() {
        logger.info(">>>>>> serviço consultaUser iniciado");
        return repositoryU.findAll();
    }

    @Override
    public Optional<Users> consultaPorId(Long id) {
        logger.info(">>>>>> serviço consultaPorId iniciado para o ID: " + id);
        return repositoryU.findById(id);
    }

    @Override
    public Optional<Users> cadastrar(Users usuario) {
        logger.info(">>>>>> servico cadastrar usuario iniciado ");
        return Optional.ofNullable(repositoryU.save(usuario));
    }

    @Override
    public Optional<Users> atualizar(Long id, Users usuario) {
        logger.info(">>>>>> serviço atualizar iniciado para o ID: " + id);

        if (repositoryU.existsById(id)) {
            usuario.setId(id);
            return Optional.ofNullable(repositoryU.save(usuario));
        } else {
            return Optional.empty();
        }
    }

    @Override
    public void excluir(Long id) {
        logger.info(">>>>>> serviço excluir iniciado para o ID: " + id);
        repositoryU.deleteById(id);
    }
}
