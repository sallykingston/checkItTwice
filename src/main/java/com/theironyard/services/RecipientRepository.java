package com.theironyard.services;

import com.theironyard.entities.Recipient;
import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by alhanger on 11/19/15.
 */
public interface RecipientRepository extends CrudRepository <Recipient, Integer> {
    List<Recipient> findByUser(User user);
    Recipient findOneByUser(User user);
}
