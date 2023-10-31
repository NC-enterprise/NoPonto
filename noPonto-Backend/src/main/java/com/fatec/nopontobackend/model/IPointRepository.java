package com.fatec.nopontobackend.model;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPointRepository extends JpaRepository<Point, Long> {
    public List<Point> findAllByNameIgnoreCaseContaining(String name);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO point_items (point_id, item_id) VALUES (:pointId, :itemId)", nativeQuery = true)
    void associatePointWithItem(@Param("pointId") Long pointId, @Param("itemId") Long itemId);

    List<Point> findByItemsIn(List<Long> materialIds);

    List<Point> findByNameContaining(String name);
}
