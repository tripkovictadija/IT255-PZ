import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Zakazivanje } from 'src/app/interface/zakazivanje';
import { ZakazivanjeService } from 'src/app/service/zakazivanje.service';

@Component({
  selector: 'app-izmena',
  templateUrl: './izmena.component.html',
  styleUrls: ['./izmena.component.scss']
})
export class IzmenaComponent implements OnInit {

  zakazivanje: Zakazivanje = {
    id:0,
    ime_pacijenta: '',
    prezime_pacijenta: '',
    naziv: '',
    datum: '',
    vreme: '',
    telefon: ''
  }; 


  public zakazivanja: Zakazivanje[];
  public zakazivanje2: Zakazivanje;
  constructor(private _route: ActivatedRoute, private zakazivanje_service: ZakazivanjeService, private router:Router) {
    // this.car_service.cars$.pipe.

    this.zakazivanje_service.zakazivanja$.subscribe(val => {
      this._route.params.subscribe(params => {
        this.zakazivanje2 = <Zakazivanje>JSON.parse(JSON.stringify(val.find(x => x.id == params['id'])));
      })
    });
  }

  updateZakazivanje(zakazivanje2: Zakazivanje){
    this.zakazivanje = zakazivanje2;
    this.zakazivanje_service.updateZakazivanje(this.zakazivanje).subscribe((car) => {
      this.zakazivanja.forEach((element, index) => {
        if (element.id === car.id) {
          this.zakazivanja[index] = this.zakazivanje;


        }
      });
    });
    this.router.navigate(['/pocetna']);
  }


  ngOnInit(): void {
  }

}
