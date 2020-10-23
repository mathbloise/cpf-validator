import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CacheService } from '../../services/cache.service';
import { User } from '../../models/user.model';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
  }
  constructor(
    private router: Router,
    private cacheService: CacheService,
    private authService: AuthService,
    private utilService: UtilService) { }

  ngOnInit(): void {
    this.authService.userAuth = false;
  }

  login() {
    this.authService.login(this.user).subscribe((response: any) => {
      localStorage.setItem('access_token', response.body.access_token);
      this.cacheService.accessToken = response.body.access_token;
      this.authService.userAuth = true;
      this.router.navigateByUrl('/home');
      this.utilService.showMessage("Usuário logado com sucesso");
    }, () => {
      this.authService.userAuth = false;
      this.utilService.showMessage("E-mail ou Senha inválido", true);
    });
  }

}
