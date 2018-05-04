import {Component, Input} from '@angular/core';
import {StudentGroup} from '../../../models/StudentGroup';

@Component({
  selector: 'group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss']
})
export class GroupTableComponent {
  @Input('rows') rows: StudentGroup[];

  getTutionForm(form) {
    switch (form) {
      case 'FULL_TIME':
        return 'Денна';
      case 'EXTRAMURAL':
        return 'Заочна';
      default :
          return '';
    }
  }

  getTutionTerm(term) {
    switch (term) {
      case 'REGULAR':
        return 'Звичайна';
      case 'SHORTENED':
        return 'Скорочена';
      default :
        return '';
    }
  }
}
