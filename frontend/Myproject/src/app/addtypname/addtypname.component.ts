import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addtypname',
  templateUrl: './addtypname.component.html',
  styleUrls: ['./addtypname.component.css']
})
export class AddtypnameComponent implements OnInit {
  type=""
  data: [] = [];
  showhide = false
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.post<any>('http://localhost/backend/api/GetTypeOutput.php', []);
  }
  ngOnInit(): void {
  }
  select(){

  }

}
