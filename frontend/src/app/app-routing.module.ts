import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SelectionCollectionComponent } from './components/selection-collection/selection-collection.component';

const routes: Routes = [
  { path: '', component: ScheduleComponent },
  { path: 'selection', component: SelectionCollectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
