import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CepService } from "../../../services/cep.service";
import { UtilService } from '../../../services/util.service';
import { Cep } from './../cep.model';

@Component({
  selector: 'app-cep-create',
  templateUrl: './cep-create.component.html',
  styleUrls: ['./cep-create.component.css']
})
export class CepCreateComponent implements OnInit {

  cep: Cep = {
    cep: '',
    city: '',
  }

  constructor(
    private cepService: CepService,
    private utilService: UtilService,
    private router: Router) { }

  ngOnInit(): void { }

  createCep(): void {
    this.cepService.store(this.cep).subscribe(() => {
      this.utilService.showMessage('Cep & Cidade criado!')
      this.router.navigate(['/ceps'])
    }, () => {
      this.utilService.showMessage("CEP inválido", true);
    });
  }

  cancel(): void {
    this.router.navigate(['/ceps'])
  }
}
