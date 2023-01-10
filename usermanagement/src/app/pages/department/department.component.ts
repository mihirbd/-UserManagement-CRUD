import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  allDepartment: any;
  constructor(private api: DepartmentService) {}

  ngOnInit(): void {
    this.getdepartment();
  }

  getdepartment() {
    this.api.getDepartment().subscribe((data) => {
      this.allDepartment = data;
    });
  }
}
