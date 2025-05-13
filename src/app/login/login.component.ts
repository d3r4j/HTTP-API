import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  userlogin = {
    username: '',
    password: ''
  }


  onlogin() {
    if (this.userlogin.username == 'admin' && this.userlogin.password == 'admin') {

      this.router.navigate(['/home'])

    }
    else {
      alert("wrong email and password entered")
    }
    console.log(this.userlogin)
  }



}
