import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginDTO } from 'src/model/LoginDTO';
import { MyUserService } from '../my-user.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  closeResult = '';
  isRightPanelActive = false;
  inputUsername: string = "";
  inputPassword: string = "";

  constructor(private modalService: NgbModal, private myUserService: MyUserService) { }

  ngOnInit(): void {
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

    let loginDTO: LoginDTO = { username: this.inputUsername, password: this.inputPassword }
    console.log(loginDTO);
    this.myUserService.postLogin(loginDTO).subscribe((messageDTO) => {
      console.log("Returned from server ");
    });

    // this.myUserService.test().subscribe((messageDTO) => {
    //   console.log("Returned string from server: "+messageDTO.message);
    // });

  }


}
