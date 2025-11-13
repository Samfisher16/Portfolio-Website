import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-contact',
  imports: [CardModule, ReactiveFormsModule, InputTextModule, InputNumberModule, ButtonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactFormGroup: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.contactFormGroup = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
  }

  verifyEmail(event: any) {
    let regex = '^[a-zA-Z0-9@.]+$';
    if (!event.key.match(regex)) {
      event.preventDefault();
    }
  }

  clearForm() {
    this.contactFormGroup = this.fb.group({});
    this.initializeFormGroup();
    this.showClearToast();
  }

  showClearToast() {
    window.alert('Form cleared!');
  }
}
