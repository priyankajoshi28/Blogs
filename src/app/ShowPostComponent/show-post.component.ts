import { Component } from '@angular/core';
// import { LoginService } from './login-service'
// import { User } from '../models/user.model';


@Component({
    selector : 'app-show-post',
    templateUrl : 'show-post.component.html',
    styleUrls : ['show-post.component.css'],
    // providers : [ LoginService ]
})


export class ShowPostComponent {

// public user: User;

    constructor(){
    //   this.user = new User();  
    }
    // validateLogin(){
    //   if(this.user.username && this.user.password) {
    //     this.loginService.validateLogin(this.user).subscribe(result => {
    //       console.log("===>>",result);
          
    //     },error =>{
    //       console.log("error = ",error);
    //     });

    //     }else{
    //      console.log("please enter correct username and password");
    //     }

    //   }
    } 