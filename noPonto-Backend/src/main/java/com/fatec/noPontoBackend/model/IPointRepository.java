package com.fatec.noPontoBackend.model;

import com.fatec.noPontoBackend.model.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPointRepository extends JpaRepository<Point, Long> {
    public List<Point> findAllByNomeIgnoreCaseContaining(String nome);

    @Query("SELECT DISTINCT p FROM Point p JOIN p.items items " +
            "WHERE p.uf = :uf AND p.city = :city AND items.id IN :items")
    List<Point> findBy(@Param("uf") String uf, @Param("city") String city, @Param("items") List<Item> items);

}
