import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements OnInit {
  showhide = false
  savedData = [];
  serializedDate = new FormControl((new Date()).toISOString());
  listtype = new FormControl;
  listname  = new FormControl;
  listprice  = new FormControl;
  type = ""
  typename: any
  typecontrol: any;
  response = [];
  data = [];
  dataType: [] = [];
  datapay: [] = [];
  datax: [] = [];
  creaetForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.creaetForm = this.fb.group({
      creaetList: this.fb.array([ 
      ])
    });
    this.add();
  }
  create(): FormGroup {
    return this.fb.group({
      listtype:null,
      listname:null,
      listprice:null
      });
    
  }
  getData(): Observable<any> {
    return this.http.post<any>('http://localhost/backend/api/GetTypeOutput.php', []);
  }
  getTypeinc(): Observable<any> {
    return this.http.post<any>('http://localhost//backend/api/GetMaterTypeincOutput.php', []);

  }
  getTypepay(): Observable<any> {
    return this.http.post<any>('http://localhost//backend/api/GetMaterTypepayOutput.php', []);
  }

  ngOnInit() {
    this.getsel();
    this.getTypei();
    this.getTypep();
    this.creaetForm.get('listtype')?.setValue('null')

  }

  getsel() {
    this.getData().subscribe(
      (res) => {
        this.data = res
        console.log(this.data)
      },
      (err) => {

      });
  }
  getTypei() {
    this.getTypeinc().subscribe((res) => {
      this.dataType = res
      // console.log(this.dataType)
    },
      (err) => {
        console.log(err)
      });
  }
  getTypep() {
    this.getTypepay().subscribe(
      (res) => {
        this.datapay = res
        // console.log(this.datapay)
      },
      (err) => {
        console.log(err)
      });
  }
  select() {
    if (this.type == "1") {
      this.showhide = true;
      this.datax= this.dataType 
      console.log(this.datax)
    }
    else {
      this.showhide = true;
      this.datax = this.datapay
      console.log(this.datax)
    }
  }
  get Lists() {
    return this.creaetForm.get("creaetList") as FormArray;
  }
  add() {
    this.Lists.push(this.create());
  }

  remove(i: number) {
    this.Lists.removeAt(i);
  }

  save() {
    this.savedData = this.creaetForm.value;
  }

}
