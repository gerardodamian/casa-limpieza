import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  formularioContacto: FormGroup;
  tipoDni: string = 'DNI';

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe((value) => {
      this.tipoDni = value;
    });
  }
  hasErrors(ControlName: string, errorType: string) {
    return (
      this.formularioContacto.get(ControlName)?.hasError(errorType) &&
      this.formularioContacto.get(ControlName)?.touched
    );
  }

  enviar() {
    console.log(this.formularioContacto);
  }
}
