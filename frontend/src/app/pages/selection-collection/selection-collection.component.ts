import { Component, OnInit } from '@angular/core';
import { Collect } from 'src/app/models/collect.model';
import { CollectTodayServiceService } from 'src/app/service/collect-today/collect-today-service.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection-collection.component.html',
  styleUrls: ['./selection-collection.component.css']
})
export class SelectionCollectionComponent implements OnInit {
  v: any;
  colletcT: Collect[];
  coll: boolean= false;
  constructor(
    public collectToday: CollectTodayServiceService
  ) { }

  ngOnInit(): void {
    this.getCollectToday();
  }
  enviar(pa){
    pa.forEach(element => {
      console.log(element.value);
    });
    window.location.assign("/selected");
    
  }

  getCollectToday(){
    this.collectToday.getCollect().subscribe(data=>{
      this.colletcT = data;
      this.coll = true;
      
    });
  }

}
