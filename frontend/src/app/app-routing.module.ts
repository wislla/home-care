import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SelectedComponent } from './pages/selection-collection/selected/selected.component';
import { SelectionCollectionComponent } from './pages/selection-collection/selection-collection.component';

const routes: Routes = [
  { path: '', component: ScheduleComponent },
  { path: 'selection', component: SelectionCollectionComponent }, //app-selected
  { path: 'selected', component: SelectedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
