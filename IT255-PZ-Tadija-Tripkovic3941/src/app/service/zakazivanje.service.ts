import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Zakazivanje } from '../interface/zakazivanje';
import { selectedZakazivanja } from '../store/selector/zakazivanje.selector';

@Injectable({
  providedIn: 'root'
})
export class ZakazivanjeService {

  private url: string = 'http://localhost:3000/zakazivanje';

  public zakazivanja$: Observable<Zakazivanje[]>;

  constructor(private http: HttpClient, private store: Store) { 
    this.zakazivanja$ = this.store.pipe(select(selectedZakazivanja));
  }

  public fetchZakazivanja(): Observable<Zakazivanje[]>{
    return this.http.get<Zakazivanje[]>(this.url);
  }

  addZakazivanje(zakazivanje: Zakazivanje){
    return this.http.post(this.url, zakazivanje)
  }

  updateZakazivanje(zakazivanje: Zakazivanje){
    const mUrl: string = `${this.url}/${zakazivanje.id}`;
     return this.http.put<Zakazivanje>(mUrl, zakazivanje);
  }

  deleteZakazivanje(id: number){
    const mUrl: string = `${this.url}/${id}`;
     return this.http.delete<Zakazivanje[]>(mUrl);
  }
}
