import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginDTO } from 'src/model/LoginDTO';
import { User, UserDTO } from 'src/model/User';
import { MyUserService } from '../my-user.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  closeResult = '';
  isRightPanelActive = false;

  signInPassword: string = "";

  signUpPassword: string = "";
  inputUsername: string = "";
  inputFirstName: string = "";
  inputLastName: string = "";
  inputEmail: string = "";

  isLoggedIn: boolean = false;
  loginSuccess: boolean = false;

  constructor(private modalService: NgbModal, private myUserService: MyUserService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("loggedUser")){
      this.isLoggedIn = true;
    }
  }

  open(content) {
    this.modalService.open(content, { animation: true, size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
  rightPanelTrue() {
    this.isRightPanelActive = true;
  }

  rightPanelFalse() {
    this.isRightPanelActive = false;
  }

  signIn() {
    let loginDTO: LoginDTO = { username: this.inputUsername, password: this.signInPassword };
    console.log(loginDTO);
    this.myUserService.postLogin(loginDTO).subscribe((user) => {
      // console.log("Returned from server ");
      // console.log(user.user_role.user_role);
      sessionStorage.setItem("loggedUser",JSON.stringify(user));
      sessionStorage.setItem("loggedUserRole",user.user_role.user_role);
      this.loginSuccess = true;
      setTimeout(function() { 
        this.isLoggedIn = true;
        location.reload();
      },5000);
    });
  }

  signUp() {
    let userDTO: UserDTO = { 
      username: this.inputUsername,
      password: this.signUpPassword,
      first_name: this.inputFirstName,
      last_name: this.inputLastName,
      email: this.inputEmail,
    };
    // console.log(loginDTO);
    this.myUserService.postSignup(userDTO).subscribe((user) => {
      console.log("Returned from server ");
      console.log(user);
    });
    this.clearSignup();
  }

  clearSignup() {
    this.inputUsername = "";
    this.signUpPassword = "";
    this.inputFirstName = "";
    this.inputLastName = "";
    this.inputEmail = "";
  }

}
