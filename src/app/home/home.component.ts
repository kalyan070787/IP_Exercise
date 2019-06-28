import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FormBuilder, Validators, FormControl, NgForm } from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public fb: FormBuilder) { }
  ip_list:any = [];
  allowed_inputs:Number;
  current_user;
  ip_pattern = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  text = 'SAVE';
  isSaved = false;
  isChanged = false;
  @ViewChild('form') ipForm = NgForm;
  addItem(form:NgForm) {
    if(form.valid){
      
      this.ip_list.push({ip:''});
      console.log("this.ip_list", this.ip_list)
    }
  }
  removeItem(index){
    console.log(index);
    this.ip_list.splice(index,1);
  }
  changeEvent(event){
    this.isChanged = true;
  }
  save() {
    var self= this;
    var list = this.ip_list.filter(obj => obj.ip != '');
    this.ip_list = list; 
    self.text = 'SAVING..';
    setTimeout(function(){ 
    localStorage.setItem("ips", JSON.stringify(self.ip_list )); 
    self.text = 'SAVED';
    }, 1000);
    this.isChanged = false; 
    }
  ngOnInit() {
    let input = localStorage.getItem('no_of_inputs');
    this.allowed_inputs = parseInt(input);
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.current_user = user.user;
    let ip_list = JSON.parse(localStorage.getItem('ips'));
    this.ip_list = ip_list;
    console.log("ippp", ip_list)
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
