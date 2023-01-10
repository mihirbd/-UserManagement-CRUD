package com.millennium.usermanagement.controller;

import com.millennium.usermanagement.model.User;
import com.millennium.usermanagement.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("/http://localhost:8080/user")
@RestController
@RequestMapping("/user/")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("save")
    public ResponseEntity<User> save(@RequestBody User user) {
        userService.save(user);
        return ResponseEntity.ok(user);
    }


    @GetMapping("list/{id}")
    public ResponseEntity<List<User>> getByIds(@PathVariable("id") Long id) {
        List<User> userList = userService.getDataByIds(id);
        return ResponseEntity.ok(userList);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> deleteByIds(@PathVariable("id") Long id) {
        userService.delByIds(id);
        return ResponseEntity.ok("User deleted successfully");
    }

    @GetMapping("list")
    public List<User> getData() {
        return userService.getData();
    }

    @PatchMapping("update/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User user) throws Exception {
        userService.updateUser(id,user);
        return ResponseEntity.ok("User Update Successfully");
    }

}
