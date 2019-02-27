import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'translate-data-check',
  templateUrl: './translate-data-check.component.html',
  styleUrls: ['./translate-data-check.component.scss']
})
export class TranslateDataCheckComponent {
  translateCheckData: { name: string, message: string }[];

  constructor(public activeModal: NgbActiveModal) { }

  closeWindow() {
    this.activeModal.close('Close click')
  }
}
