import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { RegisterService } from '../register.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User("","");
  message:string="OTP is valid";
  otp:string="";
  tmp:boolean=false;

  constructor(private service:RegisterService, private router:Router) { }

  ngOnInit(): void {
  }

  public loginNow(f: NgForm){
    console.log(f.value);
    let response = this.service.login(this.user);
    response.subscribe((data) => {console.log('data', data, typeof data)});
    console.log("msg",this.message);
    this.tmp = !this.tmp;
  }

  public validateNow(){
    let response = this.service.validate(this.otp);
    response.subscribe((data) => {console.log('data', data, typeof data)});
    if(this.message == "OTP is valid"){
      this.router.navigate(['/landing']);
    }
  }
}
