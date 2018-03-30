import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myvar = false;
  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log('IN LOGIN');
    this.myvar = true;
  }

}
