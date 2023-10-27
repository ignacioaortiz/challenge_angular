import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public subscribeForm!: FormGroup;
  public error!: boolean;
  public errorMsg!: string;
  public enviando: boolean = false;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.subscribeForm = new FormGroup({
      mail: new FormControl(null, [Validators.required, Validators.email]),
      dni: new FormControl(null, [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern(/^[0-9]\d*$/),
      ]),
      telefono: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
      ]),
    });
  }

  submitForm() {
    this.enviando = true;
    if (this.subscribeForm.valid) {
      const passData = this.subscribeForm.value;
      this.openDialog(passData.mail, passData.dni, passData.telefono);
      this.enviando = false;
    } else {
      this.enviando = false;
      this.subscribeForm?.markAllAsTouched();
      this.showErrorToUser(
        'Datos inválidos. Por favor, verifique su Email, DNI y Teléfono.'
      );
    }
  }

  private showErrorToUser(message: string) {
    this.error = true;
    this.errorMsg = message;
  }

  openDialog(mail: string, dni: number, telefono: number): void {
    this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        mail,
        dni,
        telefono,
      },
    });
  }

  back() {
    this.router.navigate(['/home']);
  }
}
