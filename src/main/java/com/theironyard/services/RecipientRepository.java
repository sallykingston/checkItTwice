package com.theironyard.services;

import com.theironyard.entities.Recipient;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by alhanger on 11/19/15.
 */
public interface RecipientRepository extends CrudRepository <Recipient, Integer> {
}
