import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { CepCrudComponent } from './views/cep-crud/cep-crud.component';
import { CepCreateComponent } from './components/cep/cep-create/cep-create.component';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CepReadComponent } from './components/cep/cep-read/cep-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RedDirective } from './directives/red.directive';

import { ForDirective } from './directives/for.directive';
import { CepDeleteComponent } from './components/cep/cep-delete/cep-delete.component';
import { CepUpdateComponent } from './components/cep/cep-update/cep-update.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { httpInterceptProviders } from './http-interceptor';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CepCrudComponent,
    CepCreateComponent,
    CepReadComponent,
    CepDeleteComponent,
    CepUpdateComponent,
    RedDirective,
    ForDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [AuthService, httpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
