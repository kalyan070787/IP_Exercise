import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb: FormBuilder, private router: Router) { }
  Users:any = ["Basic User", "Premium User"];
  userForm = this.fb.group({
    "user": new FormControl("", [ Validators.required ]),
  });
  submitted = false;
  onSubmit() {
    console.log("userForm", this.userForm)
    this.submitted = true;
    if(this.userForm.valid){
      let data = this.userForm.value;
      if(data.user == 'Basic User') {
        localStorage.setItem('no_of_inputs', '5');
      }else {
        localStorage.setItem('no_of_inputs', '10');
      }
      localStorage.setItem('currentUser', JSON.stringify(this.userForm.value));
      this.router.navigateByUrl('home');
    }
  }
  ngOnInit() {
    let currentUser = localStorage.getItem('currentUser');
    let allowed_inputs = localStorage.getItem('no_of_inputs');
    let ips = localStorage.getItem('ips');
    if(currentUser){
      localStorage.removeItem('currentUser');
    }
    if(allowed_inputs){
      localStorage.removeItem('no_of_inputs');
    }
    if(ips){
      localStorage.removeItem('ips');
    }
  }

}
