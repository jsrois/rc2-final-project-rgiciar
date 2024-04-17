package org.factoriaf5.backend.Service;

import java.util.Optional;
import java.util.List;

import org.factoriaf5.backend.Model.Weight;
import org.factoriaf5.backend.Repository.WeightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WeightService {

    @Autowired
    private WeightRepository weightRepository;

    public List<Weight> findAll() {
        return weightRepository.findAll();
    }

    public Optional<Weight> findById(Integer id) {
        return weightRepository.findById(id);
    }
    
}
