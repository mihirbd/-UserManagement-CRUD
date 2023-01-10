import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  baseUrl = 'http://localhost:8080/department/';
  getUrl = this.baseUrl + 'list';

  constructor(private http: HttpClient) {}
  //get data from Users by Obserbable
  getDepartment(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }
}
