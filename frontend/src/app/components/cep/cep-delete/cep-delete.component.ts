import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CepService } from "../../../services/cep.service";
import { UtilService } from '../../../services/util.service';
import { Cep } from './../cep.model';

@Component({
  selector: "app-cep-delete",
  templateUrl: "./cep-delete.component.html",
  styleUrls: ["./cep-delete.component.css"],
})
export class CepDeleteComponent implements OnInit {
  cep: Cep = {
    cep: '',
    city: '',
  }
  constructor(
    private cepService: CepService,
    private utilService: UtilService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.show();
  }

  show() {
    const id = + this.route.snapshot.paramMap.get('id');
    this.cepService.show(id).subscribe((response: any) => {      
      this.cep = response.body.content;
    });
  }

  deleteCep(): void {
    this.cepService.destroy(this.cep.id).subscribe(() => {
      this.utilService.showMessage("CEP & Cidade excluido com sucesso!");
      this.router.navigate(["/ceps"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/ceps"]);
  }
}
