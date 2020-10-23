import { CepService } from "../../../services/cep.service";
import { Cep } from "./../cep.model";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep-read',
  templateUrl: './cep-read.component.html',
  styleUrls: ['./cep-read.component.css']
})
export class CepReadComponent implements OnInit {

  ceps: Cep[]
  displayedColumns = ['id', 'cep', 'city', 'action']
  
  constructor(private service: CepService) { }

  getAll() {
    this.service.index().subscribe((response: any) => {
      this.ceps = response.body.content
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

}
