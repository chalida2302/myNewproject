import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements OnInit {
  showhide= false
  response:any
  data=[]
  cateForm = new FormBuilder;
  constructor(private apiervice: ApiService,private fb:FormBuilder) { }
  select=[{id:'1',name:"รายรับ"},{id:'2',name:"รายจ่าย"}
]
  ngOnInit(): void {
    this.get()
  }
  get(){
    // this.apiervice.getData().subscribe(()=>{
    //   this.response = this.data;
    //   console.log(this.data);
    // })
  }

  toogleTag(){
    this.showhide =! this.showhide

  }
  addCategory(){

  }
}
