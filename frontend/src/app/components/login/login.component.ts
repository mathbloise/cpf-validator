import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CacheService } from '../../services/cache.service';
import { User } from '../../models/user.model';

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
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.user).subscribe((response: any) => {
      localStorage.setItem('access_token', response.body.access_token);
      this.cacheService.accessToken = response.body.access_token;
      this.authService.userAuth = true;
      this.authService.showMenuEmitter.emit(true);
      this.router.navigateByUrl('/home');
    }, () => {
      this.authService.userAuth = false;
      this.authService.showMenuEmitter.emit(false);
    });
  }

}
