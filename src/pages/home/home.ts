import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private success : any;
  private serverURL : "localhost:8080";

  private loginForm: any = {
    formUsername: "",
    formPassword: ""    
  }
  constructor(public navCtrl: NavController, private http: Http) {
    
  }

  didSubmit(){
    console.log(this.loginForm);
    this.http.post(this.serverURL,this.loginForm).subscribe(result=>{
      this.responseHolder(result,result);
    })
  }

  responseHolder(status, response){
    if(response.error){
      console.log("error " + response.error.message);
    }
    else{
      this.success = response;
    }
  }

}
