import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private api: UserServiceService, private router: Router) {}

  ngOnInit(): void {}

  regForms = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  userRegistration() {
    if (this.regForms.valid) {
      let value = this.regForms.value;
      this.api.InsertUser(value).subscribe((res) => {
        alert('User Registared successfully');
        this.router.navigateByUrl('/login');
        this.regForms.reset();
      });
    }
  }
  clearForm() {
    this.regForms.reset();
  }
}
