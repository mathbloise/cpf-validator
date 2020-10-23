import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showMenu: boolean = true;

  constructor(
    private authService: AuthService,
    private utilService: UtilService,
    private router: Router) { }

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.authService.showMenuEmitter.emit(false);
      this.showMenu = false;
      localStorage.removeItem('access_token');
      this.router.navigateByUrl('/login');
      this.utilService.showMessage("Deslogado com sucesso...");
    });
  }

}
