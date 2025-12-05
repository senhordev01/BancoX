import { Routes } from '@angular/router';
import { Login } from './Banco/Login/login/login';
import { Inicio } from './Banco/Tela_Principal/inicio/inicio';
import { Cadastro } from './Banco/Cadastro/cadastro/cadastro';

export const routes: Routes = [
    {path:"", component:Login},
    {path:"login",component:Login},
    {path:"inicio", component:Inicio},
    {path:"cadastro", component:Cadastro}
];
