import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Doktor } from 'src/app/interface/doktor';
import { DoktorService } from 'src/app/service/doktor.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.scss']
})
export class RegistracijaComponent implements OnInit {

  doktor: Doktor = {
    id:0,    
    ime: '',
    prezime: '',
    titula: '',
    username: '',
    password: '',
  }; 

  constructor(private doktor_service: DoktorService, private router: Router) { }


  addDoktorr(formObj: Doktor){
    this.doktor_service.addDoktor(formObj).subscribe((response)=>{
      this.router.navigate(['/doktor']);
    })

  }

  ngOnInit(): void {
  }

}
