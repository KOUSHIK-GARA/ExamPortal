import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm !: FormGroup
  
  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm():void{
    this.loginForm = this.fb.group({
      username :['',Validators.required],
      password :['',Validators.required],
    })
  }

}
