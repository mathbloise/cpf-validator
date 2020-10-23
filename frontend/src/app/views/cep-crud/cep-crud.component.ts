import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cep-crud',
  templateUrl: './cep-crud.component.html',
  styleUrls: ['./cep-crud.component.css']
})
export class CepCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de CEP & Cidade',
      icon: 'storefront',
      routeUrl: '/ceps'
    }
  }

  ngOnInit(): void {
  }

  navigateToCepCreate(): void {
    this.router.navigate(['/ceps/create'])
  }

}
