import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthSocialLink } from '@nebular/auth/auth.options';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  redirectDelay: number;
  showMessages: any;
  strategy: string;
  submitted: boolean;
  errors: string[];
  messages: string[];
  
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
        email: ["",[Validators.required,Validators.email]],  
        password:["",Validators.required],
        
    });
  }
  onSubmit(){
    alert("Here")
    this.submitted = true;
    if(!this.registrationForm.value.email || !this.registrationForm.value.password){
      this.submitted = false;
      alert("please fill the form")
      return 
    }
    
    let Payload = {"Email": this.registrationForm.value.email, "Password": this.registrationForm.value.password}
    this.AuthService.userLogin( Payload).subscribe(
      (data: any)=>
      {
        
        if(data.rows.length > 0)
        {
          let UserObject = data.rows[0];
          alert("Welcome "+ UserObject.Name);
          localStorage.setItem("UserObject",JSON.stringify(UserObject));
          this.router.navigate(['/dashboard'])
        }
        else
        {
          alert("Invalid Credentials")
        }
      }
    )
  
    this.submitted=false
  }
  

}
