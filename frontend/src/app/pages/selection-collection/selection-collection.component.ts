import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collect } from 'src/app/models/collect.model';
import { CollectTodayServiceService } from 'src/app/service/collect-today/collect-today-service.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection-collection.component.html',
  styleUrls: ['./selection-collection.component.css']
})
export class SelectionCollectionComponent implements OnInit {
  dateTday : any;
  v: any;
  colletcT: Collect[];
  coll: boolean= false;
  mostraLista=false;
  constructor(
    public collectToday: CollectTodayServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCollectToday();
    this.dateTday =  new Date(Date.now());
  }
  enviar(pa){
    let dados=[];
    let responsavel = window.localStorage.getItem('user'); 
    pa.forEach(element => {
      console.log(element.value);
      dados.push({id:element.value, responsavel});
      
    });
    this.collectToday.postCollect(dados).subscribe(resul=>{
        console.log(resul);
        //this.router.navigate(['/selected'])
        window.location.assign("/selected");
      })
    
     
    
  }

  getCollectToday(){
    this.collectToday.getCollect().subscribe(data=>{
      this.colletcT = data;
      this.coll = true;
      if(this.colletcT.length>0){
        this.mostraLista = true;
      }
      
    });
  }

}
