package com.millennium.usermanagement.services;

import com.millennium.usermanagement.model.Department;

import java.util.List;

public interface DepartmentService {
    Department saveDepartment(Department department);
    List<Department> getDepartment();
}
