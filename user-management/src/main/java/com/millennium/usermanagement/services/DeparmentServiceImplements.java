package com.millennium.usermanagement.services;

import com.millennium.usermanagement.model.Department;
import com.millennium.usermanagement.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeparmentServiceImplements implements DepartmentService{

    @Autowired
    DepartmentRepository departmentRepository;


    @Override
    public Department saveDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public List<Department> getDepartment() {
        return departmentRepository.findAll();
    }


}
