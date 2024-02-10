import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.scss'
})
export class UpdatePasswordComponent {
  resetPasswordFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetPasswordFormGroup = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.resetPasswordFormGroup.valid) {
      console.log(this.resetPasswordFormGroup.value);
    }
  }

}
