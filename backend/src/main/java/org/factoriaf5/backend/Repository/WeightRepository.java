package org.factoriaf5.backend.Repository;

import org.factoriaf5.backend.Model.Weight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeightRepository extends JpaRepository<Weight, Integer>{
    
}
