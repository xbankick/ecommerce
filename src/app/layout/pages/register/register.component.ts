import { Component } from '@angular/core';
import { FormControl, FormGroup, isFormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  errorMsg!: string
  constructor(private _AuthService: AuthService,private _Router:Router) {

  }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6}/)]),
    rePassword: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6}/)]),
  },
    this.checkPasswordMatch
  )
  named!: string;
  sendData(): void {
    this._AuthService.sendRegister(this.registerForm.value).subscribe({
      next: (res) => {
         this._Router.navigate(["/login"])
      },
      error: (err) => {
        this.errorMsg = err.error.message
      }
    })
  }
  checkPasswordMatch(form: any) {
    return form.get("password").value === form.get("rePassword").value ? null : { 'passMatch': true }
  }
}
