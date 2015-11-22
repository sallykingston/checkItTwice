package com.theironyard.services;

import com.theironyard.entities.Gift;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by alhanger on 11/19/15.
 */
public interface GiftRepository extends CrudRepository <Gift, Integer> {
    Gift findOneByRecipientId(int id, int recipientId);
    List<Gift> findAllByRecipientId(int id);
}
