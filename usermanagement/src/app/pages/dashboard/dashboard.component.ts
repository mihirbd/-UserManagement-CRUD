import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allUser: any;
  modalUser: any;
  constructor(private api: UserServiceService, private router: Router) {}
  display = 'none';
  ngOnInit(): void {
    this.getUser();
  }

  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }

  //Get User From Database
  getUser() {
    this.api.getUser().subscribe((data) => {
      this.allUser = data;
    });
  }

  //Get User By Id From Database
  getUserById(id: any) {
    this.api.getUserById(id).subscribe((data) => {
      this.modalUser = data;

      //console.log(this.modalUser);
      this.updateUser = new FormGroup({
        name: new FormControl(this.modalUser[0].name, Validators.required),
        email: new FormControl(this.modalUser[0].email, Validators.required),
        phone: new FormControl(this.modalUser[0].phone, Validators.required),
        address: new FormControl(
          this.modalUser[0].address,
          Validators.required
        ),
        password: new FormControl(this.modalUser[0].email, Validators.required),
      });
    });
  }

  //Set User Information in Modal
  updateUser = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  userUpdate(userId: any) {
    if (this.updateUser.valid) {
      let value = this.updateUser.value;
      const now = new Date();
      let user: User = {
        id: userId,
        name: value.name || '',
        email: value.email || '',
        phone: value.phone || '',
        address: value.address || '',
        password: value.password || '',
      };

      this.api.InsertUser(user).subscribe((res) => {
        alert('User Updated successfully');
        this.getUser();
        this.updateUser.reset();
      });
    }
  }

  deleteUser(id: any) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.api.deleteUser(id).subscribe({
        next: (data) => {
          alert('There was an error!');
        },
        error: (error) => {
          alert('Delete successful');
          this.getUser();
          this.router.navigateByUrl('/dashboard');
        },
      });
    }
  }
}
