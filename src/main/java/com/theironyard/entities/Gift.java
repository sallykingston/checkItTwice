package com.theironyard.entities;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Created by alhanger on 11/19/15.
 */
@Entity
@Table(name = "gifts")
public class Gift {
    @Id
    @GeneratedValue
    public int id;

    @Column(nullable = false)
    public String name;

    @Column
    public BigDecimal cost;

    @Column
    public boolean isPurchased;

    @ManyToOne
    public Recipient recipient;
}
