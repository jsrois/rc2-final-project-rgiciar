package org.factoriaf5.backend.Service;

import java.util.Optional;

import org.factoriaf5.backend.Model.User;
import org.factoriaf5.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository catRepository;

    public Optional<User> findById(Integer id) {
        return catRepository.findById(id);
    }
    
}
