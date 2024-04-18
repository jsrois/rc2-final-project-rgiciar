package org.factoriaf5.backend.Controllers;

import java.util.Optional;
import java.util.List;

import org.factoriaf5.backend.Model.Weight;
import org.factoriaf5.backend.Service.WeightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/weight")
public class WeightController {
    @Autowired
    private WeightService weightService;
    
    @GetMapping
    public List<Weight> findAll() {
        return weightService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Weight> findById(@PathVariable Integer id) {
        return weightService.findById(id);
    }

    @PostMapping
    public Weight create(@RequestBody Weight weight) {
        return weightService.save(weight);
    }
    
}
