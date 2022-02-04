import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Doktor } from 'src/app/interface/doktor';
import { GetDoctors } from 'src/app/store/action/doktor.action';
import { selectedDoktori } from 'src/app/store/selector/doktor.selector';
import { DoktorState } from 'src/app/store/state/doktor.state';

@Component({
  selector: 'app-doktor-single',
  templateUrl: './doktor-single.component.html',
  styleUrls: ['./doktor-single.component.scss']
})
export class DoktorSingleComponent implements OnInit {

  public doktori$: Observable<Doktor[]>;
  public doktori: Doktor[];

  userPrice: string = "";

  constructor(private _store: Store<DoktorState>, private _router: Router) {
    this.doktori$ = this._store.pipe(select(selectedDoktori));
    this.doktori$.subscribe(val => {
      this.doktori = JSON.parse(JSON.stringify(val));

    })
  }

  ngOnInit() {
    this._store.dispatch(new GetDoctors());
  }
}
