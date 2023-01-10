import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  baseUrl = 'http://localhost:8080/user/';
  createUrl = this.baseUrl + 'save';
  getUrl = this.baseUrl + 'list';
  delUrl = this.baseUrl + 'delete';
  updateUrl = this.baseUrl + 'update';

  constructor(private http: HttpClient) {}

  //get data from Users by Obserbable
  getUser(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }

  //insert data for Users
  InsertUser(data: any): Observable<any> {
    return this.http.post(`${this.createUrl}`, data);
  }

  //Update data for Users
  updateUser(data: any, id: any): Observable<any> {
    return this.http.put(`${this.updateUrl}/${id}`, data);
  }

  deleteUser(id: number) {
    return this.http.delete<any>(`${this.delUrl}/${id}`);
  }

  getUserById(id: number) {
    return this.http.get(`${this.getUrl}/${id}`);
  }
}
