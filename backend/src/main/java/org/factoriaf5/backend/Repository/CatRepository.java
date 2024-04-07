package org.factoriaf5.backend.Repository;

import org.factoriaf5.backend.Model.Cat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatRepository extends JpaRepository<Cat, Integer>{
    
}
