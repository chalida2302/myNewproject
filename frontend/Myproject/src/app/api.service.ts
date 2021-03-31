import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:8080";
  constructor(private httpClient: HttpClient) { }
  // getData(): Observable<any>{
  //   return this.httpClient.get<any>(`${this.PHP_API_SERVER}/api/type.php`);
  // }
}
