package com.theironyard.entities;

import javax.annotation.Generated;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

/**
 * Created by alhanger on 11/19/15.
 */
@Entity
@Table (name = "users")
public class User {
    @Id
    @GeneratedValue
    public int id;

    @Column(nullable = false)
    public String username;

    @Column(nullable = false)
    public String password;

    @Column
    public BigDecimal budget;

    @OneToMany(mappedBy = "user")
    public List<Recipient> recipientList;
}
