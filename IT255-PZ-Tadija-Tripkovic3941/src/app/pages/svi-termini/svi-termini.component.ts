import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Doktor } from 'src/app/interface/doktor';
import { Zakazivanje } from 'src/app/interface/zakazivanje';
import { DoktorService } from 'src/app/service/doktor.service';
import { ZakazivanjeService } from 'src/app/service/zakazivanje.service';
import { GetZakazivanja } from 'src/app/store/action/zakazivanje.action';
import { selectedDoktori } from 'src/app/store/selector/doktor.selector';
import { selectedZakazivanja } from 'src/app/store/selector/zakazivanje.selector';
import { ZakazivanjeState } from 'src/app/store/state/zakazivanje.state';

@Component({
  selector: 'app-svi-termini',
  templateUrl: './svi-termini.component.html',
  styleUrls: ['./svi-termini.component.scss']
})
export class SviTerminiComponent implements OnInit {
  
  public zakazivanja$: Observable<Zakazivanje[]>;
  public zakazivanja: Zakazivanje[];
  unos: string = "";
  doktor: Doktor = {};

  constructor(private _store: Store<ZakazivanjeState>, private zakazivanje_service: ZakazivanjeService, private _router: Router, private doktorService: DoktorService) {
    this.zakazivanja$ = this._store.pipe(select(selectedZakazivanja));
    this.doktor = this.doktorService.ulogovan;
    this.zakazivanja$.subscribe(val => {
      this.zakazivanja = JSON.parse(JSON.stringify(val));
      console.log(val);
    })

    this.doktor = this.doktorService.ulogovan;
  }
  ngOnInit() {
    this._store.dispatch(new GetZakazivanja());
  }

  logOut(){
    this.doktorService.ulogovan = {}
    this.doktor = {}
    this._router.navigate(['/login']);
  }
  

  onDelete(id: number) {
    if (window.confirm('Da li zelite da obrisete izabrani termin?')) {
      this.zakazivanje_service.deleteZakazivanje(id).subscribe(() => {
        this.zakazivanja.forEach((curr, i) => {
          if (id === curr.id) {
            this.zakazivanja.splice(i, 1);
          }
        });
      });
    }
  }

}
