import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { CepCrudComponent } from "./views/cep-crud/cep-crud.component";
import { CepCreateComponent } from './components/cep/cep-create/cep-create.component';
import { CepDeleteComponent } from './components/cep/cep-delete/cep-delete.component';
import { CepUpdateComponent } from './components/cep/cep-update/cep-update.component';
import { LoginComponent } from "./components/login/login.component";


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "ceps",
    component: CepCrudComponent
  },
  {
    path: "ceps/create",
    component: CepCreateComponent
  },
  {
    path: "ceps/update/:id",
    component: CepUpdateComponent
  },
  {
    path: "ceps/delete/:id",
    component: CepDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
