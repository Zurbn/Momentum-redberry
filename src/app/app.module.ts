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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { GetTasksByStatusPipe } from './core/pipes/getTasksByStatus.pipe';
import { MomentumTaskCardComponent } from './core/components/momentum-task-card/momentum-task-card.component';
import { DepartmentPipe } from './core/pipes/department-name.pipe';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeKa from '@angular/common/locales/ka';
import { GetNumberOfCommentsAndSubCommentsPipe } from './core/pipes/getNumberOfCommentsAndSubComments.pipe';
import { SharedLoadingDialogComponent } from './core/components/shared-loading-dialog/shared-loading-dialog.component';
import { GetEllipsisAfterHundredLettersPipe } from './core/pipes/getEllipsisAfterHundredLetters.pipe';

registerLocaleData(localeKa);

@NgModule({
  declarations: [
    AppComponent,
    MomentumDashboardPageComponent,
    MomentumDetailsPageComponent,
    MomentumAddANewTaskComponent,
    MomentumHeaderComponent,
    MomentumAddEmployeeDialogComponent,
    MomentumUploadComponentComponent,
    MomentumTaskColumnComponent,
    MomentumTaskCardComponent,
    SharedLoadingDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    GetTasksByStatusPipe,
    DepartmentPipe,
    GetNumberOfCommentsAndSubCommentsPipe,
    FormsModule,
    GetEllipsisAfterHundredLettersPipe,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ka' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
