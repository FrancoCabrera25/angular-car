import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserRole, User } from '../../interface/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
  });
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    this.authService.login(email!, password!).subscribe((user) => {
      if (user.role === UserRole.CLIENT) {
       this.router.navigate(['/turn/list']);
      } else if (user.role === UserRole.MECHANIC) {
        console.log('rediretin INSPECTION');
      }
    });
  }
}
