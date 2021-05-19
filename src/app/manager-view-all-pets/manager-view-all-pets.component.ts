import { Component, OnInit, Type } from '@angular/core';
import { Location } from '@angular/common';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="btn-close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">"John Doe"</span> profile?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-danger" (click)="deletePet(1);modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgbdModalConfirmAutofocus {
  constructor(public modal: NgbActiveModal) {}

  deletePet(petId: number){
    console.log("delete pet with id: "+petId);
  }

}

const MODALS: {[name: string]: Type<any>} = {
  autofocus: NgbdModalConfirmAutofocus
};

@Component({
  selector: 'app-manager-view-all-pets',
  templateUrl: './manager-view-all-pets.component.html',
  styleUrls: ['./manager-view-all-pets.component.css']
})
export class ManagerViewAllPetsComponent implements OnInit {

  // showDeleteModal: boolean = false;

  constructor(private location: Location,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

  open(name: string) {
    const activeModal = this.modalService.open(MODALS[name]);
  }

}
