import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  login_button='Next'
  mode='email'
  toggleMode(){

    
  }
  login_function(){}

  next(){
    this.login_button='Login'
    this.mode='  '
  }
  back(){
    this.mode='email'
  }

}
