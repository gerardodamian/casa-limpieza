import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css'],
})
export class DniComponent implements OnChanges{

  @Input() tipoDni: string = 'DNI';

  formularioDocumento: FormGroup;

  variableNueva: string = 'Libreta'

  constructor(private form: FormBuilder) {
    this.formularioDocumento = this.form.group({
      dni: [''],
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.variableNueva = !changes?.['tipoDni'].firstChange ? changes?.['tipoDni'].currentValue : 'Libreta'
  }


  hasErrors(ControlName: string, errorType: string) {
    return (
      this.formularioDocumento.get(ControlName)?.hasError(errorType) &&
      this.formularioDocumento.get(ControlName)?.touched
    );
  }
}

