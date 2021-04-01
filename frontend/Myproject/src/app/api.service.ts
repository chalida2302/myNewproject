import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1";
  constructor(private http: HttpClient) { }
 
  getData(): Observable<any>{
    return this.http.post<any>('http://localhost/backend/api/type.php', []);
  }

}
