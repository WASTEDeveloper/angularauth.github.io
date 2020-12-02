import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import users from '../../../assets/JSON/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usersList: {login:String, password:String}[] = users;
  loginForm = this.fb.group({
    login: [''],
    password: ['']
  })
  public buttonSubmitEnabled: boolean = false; 

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    
  }

  login() {
    for(let i = 0; i < this.usersList.length; ++i) {
      if (this.usersList[i].login == this.loginForm.value['login'] && this.usersList[i].password == this.loginForm.value['password']){
        this.loginForm.disable();
        this.buttonSubmitEnabled = true;
        this.router.navigate(['/main']);
      }
    }
  }
}
