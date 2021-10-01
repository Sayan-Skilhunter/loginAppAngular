import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { RegisterService } from '../register.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User=new User("","");
  message:string ="";
  pwdmatchInvalid:boolean=false;

  constructor(private service:RegisterService, private router:Router) { }

  ngOnInit(): void {
  }

  public async registerNow(f: NgForm){
    console.log(f.value);
    if(f.value.password != f.value.confirmPassword){
      this.pwdmatchInvalid=!this.pwdmatchInvalid;
    }
    console.log(this.pwdmatchInvalid);
    let response:any = await this.service.registration(this.user).toPromise();
    this.message = response["response"];
    console.log("msg "+this.message);
    f.reset();
  }
}
