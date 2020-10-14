import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Collect } from 'src/app/models/collect.model';
import { ServCollectService } from 'src/app/service/collect/serv-collect.service';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {
 
  collect: Collect[];
  
  constructor(
    public collectServ: ServCollectService
    ) { }

  ngOnInit(): void {
    this.getCollect();
  }

  getCollect(){
    this.collectServ.getCollect().subscribe(data=>{
    
      this.collect = data; 
      console.log(this.collect);
    })
  }
}
