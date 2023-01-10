package com.millennium.usermanagement.services;

import com.millennium.usermanagement.model.User;
import com.millennium.usermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplements  implements UserService{

    @Autowired
    UserRepository userRepository;

    @Override
    public List<User> getData() {
        return userRepository.findAll();
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public void delByIds(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<User> getDataByIds(Long id) {
        return userRepository.getByIds(id);
    }

    @Override
    public User updateUser(Long id, User user) throws Exception {

        User user1=userRepository.findById(id).orElseThrow(() -> new Exception());
        user1.setName(user.getName());
        user1.setEmail(user.getEmail());
        user1.setPhone(user.getPhone());
        user1.setAddress(user.getAddress());
        user1.setPassword(user.getPassword());
        User updateUser=userRepository.save(user1);
        return updateUser;
    }



}
