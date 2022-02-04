import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doktor } from 'src/app/interface/doktor';
import { DoktorService } from 'src/app/service/doktor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  doktor: Doktor = {};
  constructor(private router: Router, private doktorService: DoktorService) { 
    this.doktor = this.doktorService.ulogovan;
  }

  logOut(){
    this.doktorService.ulogovan = {}
    this.doktor = {}
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
