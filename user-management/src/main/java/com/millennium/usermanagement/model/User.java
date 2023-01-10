package com.millennium.usermanagement.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String password;

    @ManyToOne()
    @JoinColumn(name ="department_name_id")
    private Department departmentName;

    public boolean hasId() {
        return id != null && id > 0;
    }
}
