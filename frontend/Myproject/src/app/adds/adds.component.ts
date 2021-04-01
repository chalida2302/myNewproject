import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements OnInit {
  // name = 'Angular';
  showhide=false
  savedData=[];
  serializedDate = new FormControl((new Date()).toISOString());
  typecontrol:any;
  response=[];
  data: [] = [];
    cateForm: FormGroup;
      constructor(private fb: FormBuilder,private http: HttpClient) {
        this.cateForm = this.fb.group({
          cateList: this.fb.array([])
        });
        this.add();
       
      }
     
      getData(): Observable<any>{
        // return this.http.get<any>(`${this.PHP_API_SERVER}/api/type.php`);
        return this.http.post<any>('http://localhost/backend/api/type.php', []);
      }
      ngOnInit() {
      this.getData().subscribe(
        (res)=>{
          this.data = res
        console.log(this.data)
      },
        (err)=>{

        });
    }
   
      
    
  
      toogle(){
        this.typecontrol=this.showhide
        this.showhide=true
      }
      get List() {
        return this.cateForm.get("cateList") as FormArray;
      }
      add() {
        this.List.push(this.create());
      }
    
      remove(i: number) {
        this.List.removeAt(i);
      }
      
      save() {
        this.savedData = this.cateForm.value;
      }
    
      create() {
        return this.fb.group({
          date: [],
          typeitem: [],
          listname: [],
          price: []
        
        });
      }
    }
