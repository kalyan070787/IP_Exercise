import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FormBuilder, Validators, FormControl, NgForm } from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public fb: FormBuilder) { }
  inputArr:any = [{ip:''}];
  allowed_inputs:Number;
  current_user;
  ip_pattern = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  submitted = false;
  isSaved = false;
  @ViewChild('form') ipForm = ElementRef;
  addItem(form:NgForm) {
    this.submitted = true;
    if(form.valid){
      this.inputArr.push({ip:''});
    }
  }
  removeItem(index){
    this.inputArr.splice(index,1);
  }
  changeEvent(event){
    if(this.isSaved) {
      this.isSaved = false;
    }
  }
  save() {
    this.isSaved = true;
    localStorage.setItem("ips", JSON.stringify(this.inputArr));
  }
  ngOnInit() {
    let input = localStorage.getItem('no_of_inputs');
    this.allowed_inputs = parseInt(input);
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.current_user = user.user;
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
