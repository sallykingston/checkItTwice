package com.theironyard.services;

import com.theironyard.entities.Recipient;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by alhanger on 11/19/15.
 */
public interface RecipientRepository extends CrudRepository <Recipient, Integer> {
    Recipient findOneById(int id);
    Recipient findOneByUserId(int id, int userId);
    List<Recipient> findAllByUserId(int id);
}
