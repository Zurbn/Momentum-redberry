import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MomentumDashboardPageComponent } from './pages/momentum-dashboard-page/momentum-dashboard-page.component';
import { MomentumDetailsPageComponent } from './pages/momentum-details-page/momentum-details-page.component';
import { MomentumAddANewTaskComponent } from './pages/momentum-add-a-new-task/momentum-add-a-new-task.component';
import { MomentumHeaderComponent } from './core/components/momentum-header/momentum-header.component';
import { MomentumTaskColumnComponent } from './core/components/momentum-task-column/momentum-task-column.component';
import { GetPriorityColorPipe } from './core/pipes/get-priority-color.pipe';
import { GetDepartmentColorPipe } from './core/pipes/get-department-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MomentumDashboardPageComponent,
    MomentumDetailsPageComponent,
    MomentumAddANewTaskComponent,
    MomentumHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MomentumTaskColumnComponent,
    GetPriorityColorPipe,
    GetDepartmentColorPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
