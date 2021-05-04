import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthSocialLink } from '@nebular/auth/auth.options';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  redirectDelay: number;
  showMessages: any;
  strategy: string;
  submitted: boolean;
  errors: string[];
  messages: string[];
  user: {fName,lName,email,password,cPassword};
  socialLinks: NbAuthSocialLink[];

  registrationForm : FormGroup;
  formDetail : any;
  constructor(
      private formBuilder : FormBuilder,
      // private service: NbAuthService, 
      // private options: {},
      // private cd: ChangeDetectorRef, 
      private router: Router){}

  ngOnInit(){
    this.submitted = false;
    this.createRegistrationForm()
  }
  createRegistrationForm(){
    this.registrationForm = this.formBuilder.group({
        firstName: ["",Validators.required], 
        lastName: [""], 
        email: ["",[Validators.required,Validators.email]],  
        phone: [""], 
        password:["",Validators.required],
        cPassword:["",Validators.required],
    });
  }
  register(){
    
  }
  
  
}
