import { Injectable } from '@angular/core';
import { SharedLoadingDialogComponent } from '../components/shared-loading-dialog/shared-loading-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingDialogRef: MatDialogRef<SharedLoadingDialogComponent>;

  constructor(private dialog: MatDialog) {}

  public showLoadingDialog(text?: string, dismissDur = 0): Observable<void> {
    if (!this.loadingDialogRef) {
      this.loadingDialogRef = this.dialog.open(SharedLoadingDialogComponent, {
        panelClass: 'momentum-loader',
        width: '200px',
        height: '200px',
      });
    }

    return this.loadingDialogRef.afterOpened();
  }

  public hideLoadingDialog(): void {
    if (typeof this.loadingDialogRef !== 'undefined') {
      this.loadingDialogRef.close();
      this.loadingDialogRef = undefined;
    }
  }
}
