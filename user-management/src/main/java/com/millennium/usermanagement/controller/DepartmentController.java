package com.millennium.usermanagement.controller;

import com.millennium.usermanagement.model.Department;
import com.millennium.usermanagement.repository.DepartmentRepository;
import com.millennium.usermanagement.services.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("department")
public class DepartmentController {

    @Autowired
    DepartmentService departmentService;


    @Autowired
    DepartmentRepository departmentRepository;

    @PostMapping("save")
    ResponseEntity<?> saveDepartment(@RequestBody Department department){
        departmentService.saveDepartment(department);
        return  ResponseEntity.ok("Department Save Successfully");

    }

    @GetMapping("list")
    List<Department> getDepartment(){
        return departmentService.getDepartment();
    }

    @GetMapping("list/{id}")
    Department getDepartmentById(@PathVariable("id") Long id){
     Optional<Department> department= departmentRepository.findById(id);
         return department.get();
    }

}
