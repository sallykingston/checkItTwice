package com.theironyard.controllers;

import com.theironyard.entities.User;
import com.theironyard.services.GiftRepository;
import com.theironyard.services.RecipientRepository;
import com.theironyard.services.UserRepository;
import com.theironyard.utils.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
        session.setAttribute("username", username);

        User user = users.findOneByUsername(username);
        if (user == null) {
            user = new User();
            user.username = username;
            user.password = PasswordHash.createHash(password);
            users.save(user);
        } else if (!PasswordHash.validatePassword(password, user.password)) {
            throw new Exception("Wrong password");
        }
        return "redirect:/";
    }
}
