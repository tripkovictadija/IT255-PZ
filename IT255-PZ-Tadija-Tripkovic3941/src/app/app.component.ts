import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Doktor } from './interface/doktor';
import { GetDoctors } from './store/action/doktor.action';
import { selectedDoktori } from './store/selector/doktor.selector';
import { DoktorState } from './store/state/doktor.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IT255-PZ-Tadija';

  public doktori$: Observable<Doktor[]>;
  public Doktor: Doktor[];

  constructor(private _store: Store<DoktorState>, private _route: Router){
    this.doktori$ = this._store.pipe(select(selectedDoktori));
  }

  ngOnInit(){
    this._store.dispatch(new GetDoctors());
  }

}
