package com.theironyard.entities;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

/**
 * Created by alhanger on 11/19/15.
 */
@Entity
@Table (name = "recipients")
public class Recipient {
    @Id
    @GeneratedValue
    public int id;

    @Column(nullable = false)
    public String name;

    @Column
    public BigDecimal budget;

    @ManyToOne
    public User user;

//    @OneToMany(mappedBy = "recipient")
//    public List<Gift> giftList;
}
