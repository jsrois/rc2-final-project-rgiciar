package org.factoriaf5.backend.Service;

import java.util.Optional;

import org.factoriaf5.backend.Model.Cat;
import org.factoriaf5.backend.Repository.CatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CatService {

    @Autowired
    private CatRepository catRepository;

    public Optional<Cat> findById(Integer id) {
        return catRepository.findById(id);
    }

    public Cat save(Cat cat) {
        return catRepository.save(cat);
    }
    
}
