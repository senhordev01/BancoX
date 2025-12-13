import { Routes } from '@angular/router';
import { Inicio } from './Banco/Tela_Inicial/inicio/inicio';
import { Login } from './Banco/Login/login/login';
import { Home } from './Banco/Tela_Principal/home/home';
import { Cadastro } from './Banco/Cadastro/cadastro/cadastro';


export const routes: Routes = [
    {path:"", component:Inicio},
    {path:"login",component:Login},
    {path:"home", component:Home},
    {path:"cadastro", component:Cadastro},
];
