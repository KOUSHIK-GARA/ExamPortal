import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup;

  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.createForm();
  }

  createForm():void{
    this.registerForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      username: ['',Validators.required],
      password:['',Validators.required],
      phone:['',Validators.required],
    })
  }

}
