import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTabsModule} from '@angular/material/tabs';
import { ScheduleComponent } from './components/schedule/schedule.component'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import listPlugin from '@fullcalendar/list';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/home/dialog/dialog.component'
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import{MatSelectModule} from '@angular/material/select'; 


import {MatChipsModule} from '@angular/material/chips'; 
import{MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatListModule} from '@angular/material/list';
import { SelectionCollectionComponent } from './components/selection-collection/selection-collection.component'; 

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
    SelectionCollectionComponent
  ],
  imports: [
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
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
