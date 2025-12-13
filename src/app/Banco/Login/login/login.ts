import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  standalone:true,
  styleUrls: ['./login.css']
})
export class Login {
  email:string = "";
  senha:string = "";

  constructor(private readonly titleService:Title, private router:Router){
    titleService.setTitle("Login no BancoX");
  }

  RealizarLogin(){
    try{
      if(this.email.trim() === ""){
        throw new Error("Nao pode deixar o campo do email vazio");
      }
      if(!this.email.includes("@") || !this.email.includes(".")){
        throw new Error ("Tipo formataçao de e-mail incorreta");
      }
      if (this.senha.trim() === ""){
        throw new Error ("Nao pode deixar o campo da senha vazio");

      }
      else{
        this.router.navigate(['home']);
      }
    }catch(error:any){
      alert(`${error.message}`);
    }
  }
}
