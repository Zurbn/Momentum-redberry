import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MomentumDashboardPageComponent } from './pages/momentum-dashboard-page/momentum-dashboard-page.component';
import { MomentumDetailsPageComponent } from './pages/momentum-details-page/momentum-details-page.component';
import { MomentumAddANewTaskComponent } from './pages/momentum-add-a-new-task/momentum-add-a-new-task.component';

const routes: Routes = [
  { path: '', component: MomentumDashboardPageComponent },
  { path: 'details', component: MomentumDetailsPageComponent },
  { path: 'add-new-task', component: MomentumAddANewTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
