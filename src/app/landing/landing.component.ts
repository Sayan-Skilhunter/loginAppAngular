import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  message:string ="";
  buttonLabel:string ="";

  constructor(private service:RegisterService, private router:Router) { }

  ngOnInit(): void {
  }
  
  public async logoutNow(){
    let response:any = await this.service.logout().toPromise();
    this.message = response["response"];
    console.log("msg "+this.message);
    this.router.navigate(['/']);
  }
}
