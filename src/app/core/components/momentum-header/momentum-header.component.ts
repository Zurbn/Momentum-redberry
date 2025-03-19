import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingState } from '../../models/loading-state.model';
import { MomentumAddEmployeeDialogComponent } from '../momentum-add-employee-dialog/momentum-add-employee-dialog.component';

@Component({
  selector: 'app-momentum-header',
  templateUrl: './momentum-header.component.html',
  styleUrls: ['./momentum-header.component.scss'],
})
export class MomentumHeaderComponent {
  constructor(private dialog: MatDialog) {}

  public handleAddEmployeeClick(): void {
    this.dialog.open(MomentumAddEmployeeDialogComponent, {
      panelClass: 'ha-mat-dialog-panel',
      maxWidth: '100%',
      width: '913px',
      height: '800px',
    });
  }
}
