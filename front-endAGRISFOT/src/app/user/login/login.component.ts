import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  password = '';
  charCount!: number;

  constructor(
    public fb: FormBuilder,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }
  ngOnInit() {
  }
  updateCharCount() {
    this.charCount = this.password.length;
  }
  saveData() {
    if (this.myForm.valid) {
      this.router.navigate(['/home']);
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        color: '#d33',
        title: 'Correo o contraseña incorrectos',
        showConfirmButton: false,
        width: '500px',
        timer: 1510
      })
    }
  }
}
