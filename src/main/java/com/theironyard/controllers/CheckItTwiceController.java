package com.theironyard.controllers;

import com.theironyard.entities.Recipient;
import com.theironyard.entities.User;
import com.theironyard.services.GiftRepository;
import com.theironyard.services.RecipientRepository;
import com.theironyard.services.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.math.BigDecimal;

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

    @RequestMapping("/add-recipient")
    public void addRecipient(HttpSession session, String name, BigDecimal budget) {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);

        Recipient recipient = new Recipient();
        recipient.name = name;
        recipient.budget = budget;
        recipients.save(recipient);

        user.recipientList.add(recipient);
    }
}
