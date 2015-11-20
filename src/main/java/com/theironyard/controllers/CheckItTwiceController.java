package com.theironyard.controllers;

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


    @RequestMapping("/")
    public String home(Model model, HttpSession session) {
        String username = (String) session.getAttribute("username");

        if (username == null) {
            return "login";
        }

        model.addAttribute("username", username);
        return "home";
    }

    @RequestMapping("/login")
    public String login(String username, String password, HttpSession session) throws Exception {

        User user = users.findOneByUsername(username);
        if (user == null) {
            user = new User();
            user.username = username;
            user.password = PasswordHash.createHash(password);
            users.save(user);
        } else if (!PasswordHash.validatePassword(password, user.password)) {
            throw new Exception("Wrong password");
        }

        session.setAttribute("username", username);

        return "redirect:/";
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

        user.recipientList.add(recipient);
    }

    @RequestMapping("/add-gift")
    public void addGift(HttpSession session, int id, String name, BigDecimal cost) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }

        Recipient recipient = recipients.findOneById(id);

        Gift gift = new Gift();
        gift.name = name;
        gift.cost = cost;
        gifts.save(gift);

        recipient.giftList.add(gift);
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

    @RequestMapping("edit-gift")
    public void editGift(HttpSession session, int id, String name, BigDecimal cost) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in.");
        }

        Recipient recipient = recipients.findOneById(id);

        Gift gift = gifts.findOne(id);
        gift.name = name;
        gift.cost = cost;
        gifts.save(gift);

        recipient.giftList.add(gift);
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

        user.recipientList.remove(recipient);
    }

}
