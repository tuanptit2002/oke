import {Component, OnInit} from '@angular/core';
import {LoginUserService} from "../service/loginUser.service";
import {User} from "../data/User";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  accc :any ;
  constructor(private loginService: LoginUserService, private router : Router) {
  }

  Login(tmp: any) {
    this.user = tmp.value;
    console.log('user ne----------',this.user);
    this.loginService.loginUSer(this.user).subscribe(data => {

      console.log('data ne------------',data);
      this.accc = data
      // console.log(this.accc.statusCode === 200);
      if(this.accc.statusCode === "OK"){
        // alert("Login Successfully")
        this.router.navigate(['/full-layout']);
      }
      else{
        alert("Sorry Please enter correct Email or Password");
      }

    }, error => alert("Sorry Please enter correct Email or Password"));
  }


  ngOnInit(): void {
    sessionStorage.setItem('token', '');
  }


}
