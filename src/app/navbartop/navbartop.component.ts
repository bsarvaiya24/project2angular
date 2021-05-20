import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbartop',
  templateUrl: './navbartop.component.html',
  styleUrls: ['./navbartop.component.css']
})
export class NavbartopComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

}
