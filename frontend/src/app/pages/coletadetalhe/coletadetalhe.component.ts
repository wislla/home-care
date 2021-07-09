import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServCollectService } from 'src/app/service/collect/serv-collect.service';

@Component({
  selector: 'app-coletadetalhe',
  templateUrl: './coletadetalhe.component.html',
  styleUrls: ['./coletadetalhe.component.css']
})
export class ColetadetalheComponent implements OnInit {
  coleta: number;
  coletaData: any;
  constructor(
    public getCollect: ServCollectService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.coleta = params['coleta'];
        console.log(this.coleta);
    })
    this.getCollect.getCollectDetalhe(this.coleta).subscribe(
      res =>{
        this.coletaData = res[0];
        this.coletaData.isolamento = this.coletaData.isolamento? 'Em isolamento' : 'Nenhum';
        console.log(res);
      }
    );
  }

}
