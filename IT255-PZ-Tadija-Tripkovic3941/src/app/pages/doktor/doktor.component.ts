import { Component, Input, OnInit } from '@angular/core';
import { Doktor } from 'src/app/interface/doktor';
import { DoktorService } from 'src/app/service/doktor.service';

@Component({
  selector: 'app-doktor',
  templateUrl: './doktor.component.html',
  styleUrls: ['./doktor.component.scss']
})
export class DoktorComponent {

  @Input() doktor: Doktor;
  public pricesSum: any;


  constructor(private room_service: DoktorService) {
  }

}
