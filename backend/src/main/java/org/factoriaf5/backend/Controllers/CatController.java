package org.factoriaf5.backend.Controllers;

import java.util.Optional;

import org.factoriaf5.backend.Model.Cat;
import org.factoriaf5.backend.Service.CatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping ("/cat")
public class CatController {
    @Autowired
    private CatService catService;

    @GetMapping("/{id}")
    public Optional<Cat> findById(@PathVariable Integer id) {
        return catService.findById(id);
    }
    
    
}
