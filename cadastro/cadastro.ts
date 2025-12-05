import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'],
  standalone:true
})
export class Cadastro {
  Nome:string = "";
  Email:string = "";
  Confirmar_Email = "";
  Senha:string = "";
  Confirmar_Senha:string = "";

  constructor (private readonly titleService:Title, private router:Router){
    titleService.setTitle("Realizar Cadastro");
  }

  Login(){
    this.router.navigate(["login"]);
  }
}
