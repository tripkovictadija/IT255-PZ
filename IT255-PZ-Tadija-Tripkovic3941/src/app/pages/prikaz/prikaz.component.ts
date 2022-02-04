import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Zakazivanje } from 'src/app/interface/zakazivanje';
import { ZakazivanjeService } from 'src/app/service/zakazivanje.service';


@Component({
  selector: 'app-prikaz',
  templateUrl: './prikaz.component.html',
  styleUrls: ['./prikaz.component.scss']
})
export class PrikazComponent implements OnInit {

  svaZakazivanja: Object
  public zakazivanje: Zakazivanje;
  public zakazivanja: Zakazivanje[];

  constructor(private _route: ActivatedRoute, private zakazivanje_service: ZakazivanjeService) {

    this.zakazivanje_service.zakazivanja$.subscribe(val => {
      this._route.params.subscribe(params => {
        this.zakazivanje = <Zakazivanje>JSON.parse(JSON.stringify(val.find(x => x.id == params['id'])));
      })
    });
   }

  ngOnInit(): void {
  }

}

