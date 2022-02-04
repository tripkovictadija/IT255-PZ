import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Doktor } from 'src/app/interface/doktor';
import { DoktorService } from 'src/app/service/doktor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForma: FormGroup;

  constructor(
    private doktorService: DoktorService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForma = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }
  
  logIn() {
    this._http.get<Doktor[]>('http://localhost:3000/doktor').subscribe(res => {
      const doktor = res.find((a: Doktor) => {
        return a.username === this.loginForma.value.username && a.password === this.loginForma.value.password
      })

      if (doktor) {
        alert("Uspesno ste se ulogovali!");
        this.doktorService.ulogovan = doktor;
        this.loginForma.reset();
        this.router.navigate(['/pocetna'])
        console.log("Ime", this.doktorService.ulogovan.ime)
      } else {
        alert('Korisnik nije pronadjen!')
      }
    }, err => {
      alert('Server side 0')
    }
    )
  }

  logOut(){
    this.doktorService.ulogovan = {}
  }

  onSubmit() {
    const { username, password } = this.loginForma.value;

    this.doktorService.getDoktor(username, password).subscribe((doktori) => {
      if (doktori.length > 0) {
        localStorage.setItem('currentUser', JSON.stringify(doktori[0]));
        this.router.navigate(['/']);
      } else {
        window.alert('Pogresno korisnicko ime ili lozinka!');
      }
    });
  }
}

