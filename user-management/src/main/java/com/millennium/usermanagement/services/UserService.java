package com.millennium.usermanagement.services;

import com.millennium.usermanagement.model.User;

import java.util.List;

public interface UserService {

    List<User> getData();
    User save(User user);
    void delByIds(Long id);
    List<User> getDataByIds(Long id);
    User updateUser(Long id, User user) throws Exception;


}
