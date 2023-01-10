import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(private api: UserServiceService, private router: Router) {}

  ngOnInit(): void {}

  userForms = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  userinsert() {
    if (this.userForms.valid) {
      let value = this.userForms.value;
      this.api.InsertUser(value).subscribe((res) => {
        alert('User created successfully');
        this.router.navigateByUrl('/dashboard');
        this.userForms.reset();
      });
    }
  }
}
