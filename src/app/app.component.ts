import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from '../components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'expertTeam';

  constructor(private _modalService: NgbModal) {}


  open() {
    this._modalService.open(Modal,{
      size: 'xl'
    });
  }

}


