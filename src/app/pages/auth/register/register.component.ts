import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthSocialLink } from '@nebular/auth/auth.options';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth/auth.service';

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
  user: {
    fName : string,
    lName: string,
    email: string,
    phone : string,
    password: string,
    cPassword : string,
  };
  socialLinks: NbAuthSocialLink[];

registrationForm : FormGroup;
  formDetail : any;
  constructor(
      private formBuilder : FormBuilder,
      private AuthService : AuthService,
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
  onSubmit(){
    alert("Here")
    this.submitted = true;
    if(this.registrationForm.value.password != this.registrationForm.value.cPassword){
      this.submitted = false;
      alert("password mismatch")
      return 
    }
    let Payload = 
    {
      "Name": this.registrationForm.value.firstName +" "+ this.registrationForm.value.lastName,
      "Email": this.registrationForm.value.email,
      "Phone": this.registrationForm.value.phone,
      "Password": this.registrationForm.value.password
    }
          
    this.AuthService.insertUserData( Payload ).subscribe(
      data=>
      {
        alert("Account Created");
        // this.Router.navigate(['/login'], { queryParams: { email: this.FormData.Email}});
        
        
      },
      error=>
      {
        console.log("Error: "+ JSON.stringify(error))
      }
    )
    this.submitted=false
  }
  
  
}
