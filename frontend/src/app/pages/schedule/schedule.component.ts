import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; 
import ptLocale from '@fullcalendar/core/locales/pt-br'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  calendarOptions: CalendarOptions = {

    timeZone: 'America/Fortaleza',
    locale: ptLocale,   
    initialView: 'dayGridWeek',

    views: {
      
      listWeek: { buttonText: 'Lista' },
    },
    headerToolbar: {
      left: 'dayGridMonth,dayGridWeek,listWeek',
      center: 'title',
      right: 'prev,next'
    },
    events: [
      { 
        title: 'Total: 20', 
        allDay: true,
        start: '2020-10-06',
        editable: true,
      },
        { 
        title: 'Wislla Nuânska',
        //url: 'www.google.com', 
        start: '2020-10-06T07:30:00Z', 
        end: '2020-10-06T08:30:00Z', 
        //editable: true,
      },
      { start: '2020-10-06T12:30:00Z' }, 
      { start: '2018-09-01T12:30:00+XX:XX' }, 
      { start: '2018-09-01T12:30:00' } 
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
