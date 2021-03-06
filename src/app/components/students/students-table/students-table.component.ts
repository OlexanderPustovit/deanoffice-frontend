import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GridReadyEvent, ModelUpdatedEvent, SelectionChangedEvent} from 'ag-grid-community'

import {StudentDegree} from '../../../models/StudentDegree';
import {defaultColDef, LOCALE_TEXT} from '../constants';
import {PaymentFilterComponent} from '../payment-filter/payment-filter.component';

@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {
  @Input() rows: StudentDegree[] = [];
  @Input() columnDefs;
  @Output() selectionChanged = new EventEmitter();
  @Output() itemsCountUpdate = new EventEmitter();
  private gridApi;
  private gridColumnApi;
  defaultColDef = defaultColDef;
  localeText = LOCALE_TEXT;
  frameworkComponents;
  getRowNodeId = (data) => data.id;

  constructor() {
    this.frameworkComponents = {
      paymentFilter: PaymentFilterComponent
    };
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  onSelectionChanged(event: SelectionChangedEvent) {
    const selected = event.api.getSelectedRows();
    this.selectionChanged.emit(selected)
  }

  onModelUpdated(params: ModelUpdatedEvent) {
    const count = params.api.getDisplayedRowCount();
    this.itemsCountUpdate.emit(count);
  }

  onRenew(forRenew: StudentDegree[]) {
    this.gridApi.updateRowData({ remove: forRenew });
  }

  showByIndex(index: number) {
    if (index !== -1) {
      this.gridApi.ensureIndexVisible(index, 'top');
      const node = this.gridApi.getRowNode(this.rows[index].id);
      node.setSelected(true, true);
    }
  }
}
