import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Zakazivanje } from 'src/app/interface/zakazivanje';
import { ZakazivanjeService } from 'src/app/service/zakazivanje.service';

@Component({
  selector: 'app-zakazi',
  templateUrl: './zakazi.component.html',
  styleUrls: ['./zakazi.component.scss']
})
export class ZakaziComponent implements OnInit {

  zakazivanje: Zakazivanje = {
    id:0,    
    ime_pacijenta: '',
    prezime_pacijenta: '',
    naziv: '',
    datum: '',
    vreme: '',
    telefon: '',
  }; 

  constructor(private zakazi_service: ZakazivanjeService, private router: Router) { }


  addZakazivanje(formObj: Zakazivanje){
    this.zakazi_service.addZakazivanje(formObj).subscribe((response)=>{
      this.router.navigate(['/zakazivanje']);
    })

  }

  ngOnInit(): void {
  }

}
