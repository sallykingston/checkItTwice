package com.theironyard.services;

import com.theironyard.entities.Gift;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by alhanger on 11/19/15.
 */
public interface GiftRepository extends CrudRepository <Gift, Integer> {
}
