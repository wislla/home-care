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

    timeZone: 'America/Bahia',
    locale: ptLocale,   
    initialView: 'dayGridWeek',

    views: {
      listDay: { buttonText: 'Lista Dia' },
      listWeek: { buttonText: 'Lista Semana' },
    },
    headerToolbar: {
      left: 'dayGridMonth,dayGridWeek,listWeek,listDay',
      center: 'title',
      right: 'prevYear,prev,next,nextYear'
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
