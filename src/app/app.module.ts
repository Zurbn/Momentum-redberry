import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MomentumDashboardPageComponent } from './pages/momentum-dashboard-page/momentum-dashboard-page.component';
import { MomentumDetailsPageComponent } from './pages/momentum-details-page/momentum-details-page.component';
import { MomentumAddANewTaskComponent } from './pages/momentum-add-a-new-task/momentum-add-a-new-task.component';
import { MomentumHeaderComponent } from './core/components/momentum-header/momentum-header.component';
import { MomentumTaskColumnComponent } from './core/components/momentum-task-column/momentum-task-column.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MomentumStoreModule } from 'src/stores/momentum-store';
import { EffectsModule } from '@ngrx/effects';
import { GetRulesStatePipe } from './core/pipes/get-rules-state.pipe';
import { GetPriorityDataPipe } from './core/pipes/getPriorityData.pipe';
import { FilterEmployeesByDepartmentPipe } from './core/pipes/filterEmployeesByDepartment.pipe';
import { MomentumAddEmployeeDialogComponent } from './core/components/momentum-add-employee-dialog/momentum-add-employee-dialog.component';
import { MomentumUploadComponentComponent } from './core/components/momentum-upload-component/momentum-upload-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MomentumDashboardPageComponent,
    MomentumDetailsPageComponent,
    MomentumAddANewTaskComponent,
    MomentumHeaderComponent,
    MomentumAddEmployeeDialogComponent,
    MomentumUploadComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MomentumTaskColumnComponent,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    MomentumStoreModule,
    GetRulesStatePipe,
    GetPriorityDataPipe,
    FilterEmployeesByDepartmentPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
