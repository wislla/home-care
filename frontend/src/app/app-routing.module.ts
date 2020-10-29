import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CadastroUserComponent } from './pages/cadastro-user/cadastro-user.component';
import { LoginComponent } from './pages/login/login.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SelectedComponent } from './pages/selection-collection/selected/selected.component';
import { SelectionCollectionComponent } from './pages/selection-collection/selection-collection.component';

const routes: Routes = [
  { path: '', component: LoginComponent
  
  },
  { path: 'home', component: ScheduleComponent,
  canActivate: [AuthGuard]
},

  { path: 'selection', component: SelectionCollectionComponent,
    canActivate: [AuthGuard]
  }, //app-selected
  { path: 'selected', component: SelectedComponent,
  canActivate: [AuthGuard]
  },
  { path: 'cadastro', component: CadastroUserComponent,
  canActivate: [AuthGuard]
   },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
