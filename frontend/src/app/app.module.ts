import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTabsModule} from '@angular/material/tabs';
import { ScheduleComponent } from './pages/schedule/schedule.component'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import listPlugin from '@fullcalendar/list';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './pages/home/dialog/dialog.component'
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import{MatSelectModule} from '@angular/material/select'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 

import {MatChipsModule} from '@angular/material/chips'; 
import{MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatListModule} from '@angular/material/list';
import { SelectionCollectionComponent } from './pages/selection-collection/selection-collection.component';
import { SelectedComponent } from './pages/selection-collection/selected/selected.component'; 
import {MatCardModule} from '@angular/material/card'; 
import { HttpClientModule } from '@angular/common/http';
import { DataTimePipe } from './pipes/data-time.pipe';
import { CadastroUserComponent } from './pages/cadastro-user/cadastro-user.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component'; 
import { LoginService } from './service/login/login.service';
import { AuthGuard } from './guards/auth.guard';
import { ColetadetalheComponent } from './pages/coletadetalhe/coletadetalhe.component';
//import { DialogdadosComponent } from './pages/schedule/dialogdados/dialogdados/dialogdados.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
    DialogComponent,
    SelectionCollectionComponent,
    SelectedComponent,
    DataTimePipe,
    CadastroUserComponent,
    LoginComponent,
    ColetadetalheComponent,
    //DialogdadosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    FullCalendarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatChipsModule,
    MatCardModule,
    MatProgressBarModule,
    MatSnackBarModule,
    
    
  ],
  providers: [
    DataTimePipe,
    LoginService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
