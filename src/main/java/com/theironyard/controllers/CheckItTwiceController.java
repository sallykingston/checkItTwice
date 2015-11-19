package com.theironyard.controllers;

import com.theironyard.services.GiftRepository;
import com.theironyard.services.RecipientRepository;
import com.theironyard.services.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by alhanger on 11/19/15.
 */
public class CheckItTwiceController {

    @Autowired
    UserRepository users;

    @Autowired
    RecipientRepository recipients;

    @Autowired
    GiftRepository gifts;
}
