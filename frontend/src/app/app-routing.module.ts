import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUserComponent } from './pages/cadastro-user/cadastro-user.component';
import { LoginComponent } from './pages/login/login.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SelectedComponent } from './pages/selection-collection/selected/selected.component';
import { SelectionCollectionComponent } from './pages/selection-collection/selection-collection.component';

const routes: Routes = [
  { path: '', component: ScheduleComponent },
  { path: 'selection', component: SelectionCollectionComponent }, //app-selected
  { path: 'selected', component: SelectedComponent },
  { path: 'cadastro', component: CadastroUserComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
