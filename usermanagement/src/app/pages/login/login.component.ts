import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userinfo: any;
  constructor(private api: UserServiceService, private router: Router) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  userLogin() {
    if (this.loginForm.valid) {
      this.api.getUser().subscribe((data) => {
        const user = data.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          this.loginForm.reset();
          alert('Login successfull');
          localStorage.setItem('id', user.id);
          localStorage.setItem('session', user.email);
          this.router.navigate(['/dashboard']);
        } else {
          alert('Email or Password is wrong!');
        }
      });
    }
  }
}
