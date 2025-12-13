import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css'],
  standalone: true
})
export class Inicio {
  constructor(private router:Router){}
  FazerLogin(){
    this.router.navigate(['login']);
  }
  FazerCadastro(){
    this.router.navigate(['cadastro']);
  }
}
