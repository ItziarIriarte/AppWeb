import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from "./componentes/home-page/home-page.component";
import {LoginPageComponent} from "./componentes/login-page/login-page.component";
import {RegisterPageComponent} from "./componentes/register-page/register-page.component";
import {AsignacionPageComponent} from "./componentes/asignacion-page/asignacion-page.component";
import {NotFoundPageComponent} from "./componentes/not-found-page/not-found-page.component";
import {PedidosComponent} from "./componentes/pedidos/pedidos.component";
import {RepartidoresComponent} from "./componentes/repartidores/repartidores.component";

import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path:'login', component:LoginPageComponent},
  {path: 'register', component:RegisterPageComponent},
  {path:'asignacion', component:AsignacionPageComponent, canActivate:[AuthGuard]},
  {path:'**', component: NotFoundPageComponent},
  {path:'pedido', component:PedidosComponent, canActivate:[AuthGuard]},
  {path: 'repartidores', component:RepartidoresComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
