import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; 
import ptLocale from '@fullcalendar/core/locales/pt-br'
import { Collect } from 'src/app/models/collect.model';
import { ScheduleService } from 'src/app/service/schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  colet: Collect  [];
  v: boolean = false;
  event: any = [];
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
    events: this.event,
    eventClick: function(info) {
      info.jsEvent.preventDefault(); // don't let the browser navigate
  
      if (info.event.url) {
        window.open(info.event.url);
      }
    }
    
  };

 
  constructor(
    public scheduleS : ScheduleService,
  ) { 
  }

  ngOnInit(): void {
    this.getCollectToday();
    
  }

  getCollectToday(){
    this.scheduleS.getAllCollect().subscribe(data=>{

      this.colet=data;
      this.colet.forEach(c => {
        let element = {
          //allDay: false,
          title: c.previsao+" - "+c.nome ,
          //url: 'selected', 
          start: c.dt_coleta, 
          
          
        }
        this.event.push(element);
      });
      this.v = true;
      console.log(this.event);
      
    });
  }

}
