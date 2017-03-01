import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private success : any;

  private loginForm: any = {
    formUsername: "",
    formPassword: ""    
  }
  constructor(public navCtrl: NavController, private http: Http) {
  }

  didSubmit(formUsername, formPassword){
    console.log(this.loginForm);
    this.http.post("http://127.0.0.1:8080/login",this.loginForm).subscribe(result=>{
      this.responseHolder(status,result.json());
      console.log(result);
    })
  }

  responseHolder(status,response){
    if(response.error){
      console.log("error " + response.error.message);
    }
    else{
      this.success = response;
    }
  }

}
