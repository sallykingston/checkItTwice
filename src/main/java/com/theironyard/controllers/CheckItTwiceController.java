package com.theironyard.controllers;

import com.theironyard.LoginParams;
import com.theironyard.entities.Gift;
import com.theironyard.entities.Recipient;
import com.theironyard.entities.User;
import com.theironyard.entities.User;
import com.theironyard.services.GiftRepository;
import com.theironyard.services.RecipientRepository;
import com.theironyard.services.UserRepository;
import com.theironyard.utils.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
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

    @RequestMapping("get-users")
    public List<User> getUsers() {
        return (List<User>) users.findAll();
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
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

        List<Recipient> recipientsList = recipients.findAllByUserId(user.id);
        return recipientsList;
    }

    @RequestMapping("/get-recipient")
    public Recipient getRecipient(HttpSession session, int id) {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);

        Recipient recipient = recipients.findOneByUserId(id, user.id);
        return recipient;
    }

    @RequestMapping("/get-gifts")
    public List<Gift> getGifts(HttpSession session, int id) {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);
        Recipient recipient = recipients.findOneByUserId(id, user.id);
        List<Gift> giftList = gifts.findAllByRecipientId(recipient.id);
        return giftList;
    }

    @RequestMapping("get-gift")
    public Gift getGift(HttpSession session, int id, int recipientId) {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);
        Recipient recipient = recipients.findOneByUserId(recipientId, user.id);
        Gift gift = gifts.findOneByRecipientId(id, recipient.id);
        return gift;
    }

    @RequestMapping("/add-recipient")
    public void addRecipient(HttpSession session, String name, BigDecimal budget) throws Exception {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);

        if (username == null) {
            throw new Exception("Not logged in.");
        }

        Recipient recipient = new Recipient();
        recipient.name = name;
        recipient.budget = budget;
        recipients.save(recipient);

        //user.recipientList.add(recipient);
    }

    @RequestMapping("/add-gift")
    public void addGift(HttpSession session, int id, String name, BigDecimal cost, boolean isPurchased) throws Exception {
        String username = (String) session.getAttribute("username");

        if (username == null) {
            throw new Exception("Not logged in.");
        }

        Recipient recipient = recipients.findOneById(id);

        Gift gift = new Gift();
        gift.name = name;
        gift.cost = cost;
        gift.isPurchased = isPurchased;
        gifts.save(gift);

        //recipient.giftList.add(gift);
    }

    @RequestMapping("/add-budget")
    public void addBudget(HttpSession session, BigDecimal budget) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }

        User user = users.findOneByUsername(username);
        user.budget = budget;
        users.save(user);
    }

    @RequestMapping("/edit-recipient")
    public void editRecipient(HttpSession session, String name, BigDecimal budget, int id) throws Exception {
        String username = (String) session.getAttribute("username");
        User user = users.findOneByUsername(username);

        if (username == null) {
            throw new Exception("Not logged in.");
        }

        Recipient recipient = recipients.findOneById(id);
        recipient.name = name;
        recipient.budget = budget;
        recipients.save(recipient);

        //user.recipientList.add(recipient);
    }

    @RequestMapping("/edit-budget")
    public void editBudget(HttpSession session, BigDecimal budget) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }

        User user = users.findOneByUsername(username);
        user.budget = budget;
        users.save(user);
    }

    @RequestMapping("/edit-gift")
    public void editGift(HttpSession session, int id, String name, BigDecimal cost, boolean isPurchased) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }

        Recipient recipient = recipients.findOneById(id);

        Gift gift = gifts.findOne(id);
        gift.name = name;
        gift.cost = cost;
        gift.isPurchased = isPurchased;
        gifts.save(gift);

        //recipient.giftList.add(gift);
    }

    @RequestMapping("/delete-recipient")
    public void deleteRecipient(HttpSession session, Integer id) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }

        User user = users.findOneByUsername(username);
        Recipient recipient = recipients.findOneById(id);

        recipients.delete(id);

        //user.recipientList.remove(recipient);
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
