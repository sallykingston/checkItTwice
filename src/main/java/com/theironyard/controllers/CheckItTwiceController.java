package com.theironyard.controllers;

import com.theironyard.services.*;
import com.theironyard.entities.Gift;
import com.theironyard.entities.Recipient;
import com.theironyard.entities.User;
import com.theironyard.utils.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by alhanger on 11/19/15.
 */
@RestController
public class CheckItTwiceController {

    @Autowired
    UserRepository users;

    @Autowired
    RecipientRepository recipients;

    @Autowired
    GiftRepository gifts;


    @RequestMapping("/get-user")
    public User getUser(HttpSession session) {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);

        return user;
    }

    @RequestMapping("/get-users")
    public List<User> getUsers() {
        return (List<User>) users.findAll();
    }

    @RequestMapping("/login")
    public void login(@RequestBody LoginParams params, HttpSession session) throws Exception {

        User user = users.findOneByUsername(params.username);
        if (user == null) {
            user = new User();
            user.username = params.username;
            user.password = PasswordHash.createHash(params.password);
            users.save(user);
        } else if (!PasswordHash.validatePassword(params.password, user.password)) {
            throw new Exception("Wrong password");
        }

        session.setAttribute("username", params.username);
    }

    @RequestMapping("/get-recipients")
    public List<Recipient> getRecipients(HttpSession session) {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);

        List<Recipient> recipientsList = recipients.findByUser(user);
        return recipientsList;
    }

    @RequestMapping("/get-recipient")
    public Recipient getRecipient(int id) {
        Recipient recipient = recipients.findOne(id);
        return recipient;
    }

    @RequestMapping("/get-gifts")
    public List<Gift> getGifts(HttpSession session) {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);
        Recipient recipient = recipients.findOneByUser(user);
        List<Gift> giftList = gifts.findAllByRecipientId(recipient.id);
        return giftList;
    }

    @RequestMapping("/get-gift")
    public Gift getGift(int id) {
        Gift gift = gifts.findOne(id);
        return gift;
    }

    @RequestMapping("/add-recipient")
    public void addRecipient(HttpSession session, @RequestBody RecipientParams params) throws Exception {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);

        if (user == null) {
            throw new Exception("Not logged in.");
        }

        Recipient recipient = new Recipient();
        recipient.name = params.name;
        recipient.budget = params.budget;
        recipient.user = user;
        recipients.save(recipient);
    }

    @RequestMapping("/add-gift")
    public void addGift(HttpSession session, @RequestBody GiftParams params, int id) throws Exception {
        String username = (String) session.getAttribute("username");

        if (username == null) {
            throw new Exception("Not logged in.");
        }

        Recipient recipient = recipients.findOne(id);

        Gift gift = new Gift();
        gift.name = params.name;
        gift.cost = params.cost;
        gift.isPurchased = params.isPurchased;
        gift.recipient = recipient;
        gifts.save(gift);
    }

    @RequestMapping("/add-budget")
    public void addBudget(HttpSession session, @RequestBody BudgetParams params) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }

        User user = users.findOneByUsername(username);
        user.budget = params.budget;
        users.save(user);
    }

    @RequestMapping("/edit-recipient")
    public void editRecipient(HttpSession session, @RequestBody RecipientParams params, int id) throws Exception {
        String username = (String) session.getAttribute("username");

        if (username == null) {
            throw new Exception("Not logged in.");
        }

        Recipient recipient = recipients.findOne(id);
        recipient.name = params.name;
        recipient.budget = params.budget;
        recipients.save(recipient);
    }

    @RequestMapping("/edit-budget")
    public void editBudget(HttpSession session, @RequestBody BudgetParams params) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }

        User user = users.findOneByUsername(username);
        user.budget = params.budget;
        users.save(user);
    }

    @RequestMapping("/edit-gift")
    public void editGift(HttpSession session, int id, @RequestBody GiftParams params) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }

        Gift gift = gifts.findOne(id);
        gift.name = params.name;
        gift.cost = params.cost;
        gift.isPurchased = params.isPurchased;
        gifts.save(gift);
    }

    @RequestMapping("/delete-recipient")
    public void deleteRecipient(HttpSession session, Integer id) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }

        Recipient recipient = recipients.findOne(id);

        recipients.delete(recipient);
    }

    @RequestMapping("/delete-gift")
    public void deleteGift(HttpSession session, Integer id) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }

        Gift gift = gifts.findOne(id);
        gifts.delete(gift);
    }
}
