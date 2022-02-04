import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Zakazivanje } from 'src/app/interface/zakazivanje';
import { GetZakazivanja } from 'src/app/store/action/zakazivanje.action';
import { selectedZakazivanja } from 'src/app/store/selector/zakazivanje.selector';
import { ZakazivanjeState } from 'src/app/store/state/zakazivanje.state';

@Component({
  selector: 'app-zakazivanje-single',
  templateUrl: './zakazivanje-single.component.html',
  styleUrls: ['./zakazivanje-single.component.scss']
})
export class ZakazivanjeSingleComponent implements OnInit {

  public zakazivanja$: Observable<Zakazivanje[]>;
  public zakazivanja: Zakazivanje[];

  userPrice: string = "";

  constructor(private _store: Store<ZakazivanjeState>, private _router: Router) {
    this.zakazivanja$ = this._store.pipe(select(selectedZakazivanja));
    this.zakazivanja$.subscribe(val => {
      this.zakazivanja = JSON.parse(JSON.stringify(val));

    })
  }

  ngOnInit() {
    this._store.dispatch(new GetZakazivanja());
  }

}
