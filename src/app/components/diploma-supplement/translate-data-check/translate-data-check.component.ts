import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataForSupplementTranslateCheck } from '../../../models/custom/DataForSupplementTranslateCheck';

@Component({
  selector: 'translate-data-check',
  templateUrl: './translate-data-check.component.html',
  styleUrls: ['./translate-data-check.component.scss']
})
export class TranslateDataCheckComponent {
  translateCheckData: DataForSupplementTranslateCheck[];

  constructor(public activeModal: NgbActiveModal) { }

  closeWindow() {
    this.activeModal.close('Close click')
  }
}
