import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../service/register.service";
import {User} from "../data/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user: User = new User();
  constructor(private register : RegisterService, private router : Router) {
  }
  registerUser(tmp: any){
    this.user = tmp.value
    this.register.singup(this.user).subscribe(data =>{
      console.log(data);
    })
    this.router.navigate([''])
  }

  ngOnInit(): void {
  }
}
