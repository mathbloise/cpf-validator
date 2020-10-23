import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CepService } from "../../../services/cep.service";
import { UtilService } from '../../../services/util.service';
import { Cep } from "./../cep.model";

@Component({
  selector: "app-cep-update",
  templateUrl: "./cep-update.component.html",
  styleUrls: ["./cep-update.component.css"],
})
export class CepUpdateComponent implements OnInit {
  cep: Cep = {
     cep: '',
     city: '',
  };

  constructor(
    private cepService: CepService,
    private utilService: UtilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.show();
  }

  show() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cepService.show(id).subscribe((response: any) => {      
      this.cep = response.body.content;
    });
  }

  updateCep(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cepService.update(this.cep, id).subscribe(() => {
      this.utilService.showMessage("CEP & Cidade atualizado com sucesso!");
      this.router.navigate(["/ceps"]);
    }, () => {
      this.utilService.showMessage("CEP inválido", true);
    });
  }

  cancel(): void {
    this.router.navigate(["/ceps"]);
  }
}
