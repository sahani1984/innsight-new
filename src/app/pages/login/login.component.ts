import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { 
    this.initform();
  }

  ngOnInit(): void {
   
  }


  login(data:any){
    console.log('sdfjsdfs')
    console.log(data);
    this.router.navigate(['/dashboard'])
  }

  initform(){
    this.loginform = this.fb.group({
      userName:["", Validators.required],
      password:["", Validators.required]
    })
  }





}
