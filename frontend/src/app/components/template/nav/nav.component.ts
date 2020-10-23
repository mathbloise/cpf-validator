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
  constructor(
    public authService: AuthService,
    private utilService: UtilService,
    private router: Router) { 
      this.authService.userAuth = true
    }

  ngOnInit() {
    this.authService.userAuth = true
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.authService.userAuth = false;
      localStorage.removeItem('access_token');
      this.router.navigateByUrl('/login');
      this.utilService.showMessage("Deslogado com sucesso...");
    });
  }

}
