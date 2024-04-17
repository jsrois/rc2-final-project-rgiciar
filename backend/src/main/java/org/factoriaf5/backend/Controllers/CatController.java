package org.factoriaf5.backend.Controllers;

import java.util.Optional;

import org.factoriaf5.backend.Model.Cat;
import org.factoriaf5.backend.Service.CatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/cat")
public class CatController {
    @Autowired
    private CatService catService;

    @GetMapping("/{id}")
    public Optional<Cat> findById(@PathVariable Integer id) {
        return catService.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCat(@PathVariable Integer id, @RequestBody Cat updatedCat) {
    Optional<Cat> optionalCat = catService.findById(id);
    if (optionalCat.isPresent()) {
        Cat cat = optionalCat.get();
        cat.setName(updatedCat.getName());
        cat.setChip_id(updatedCat.getChip_id());
        cat.setBirth(updatedCat.getBirth());
        cat.setGender(updatedCat.getGender());
        cat.setBreed(updatedCat.getBreed());
        cat.setColor(updatedCat.getColor());
        cat.setFeatures(updatedCat.getFeatures());
        cat.setSterilized(updatedCat.getSterilized());
        cat.setAllergies(updatedCat.getAllergies());
        cat.setHealth(updatedCat.getHealth());

        catService.save(cat);
        return ResponseEntity.ok().build();
    } else {
        return ResponseEntity.notFound().build();
    }
}

    

}
