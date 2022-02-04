import { Component, Input, OnInit } from '@angular/core';
import { Zakazivanje } from 'src/app/interface/zakazivanje';
import { ZakazivanjeService } from 'src/app/service/zakazivanje.service';

@Component({
  selector: 'app-zakazivanje',
  templateUrl: './zakazivanje.component.html',
  styleUrls: ['./zakazivanje.component.scss']
})
export class ZakazivanjeComponent implements OnInit {

  @Input() zakazivanje: Zakazivanje;
  public priceSum: any;

  constructor(private zakazivanje_service: ZakazivanjeService) { }

  ngOnInit(): void {
  }

}
