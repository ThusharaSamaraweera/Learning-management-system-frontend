import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { HomeService } from '../../services/home.services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  customLabelClass: string =
    'text-sm font-medium mb-0 mt-0 text-color-secondary';
  customInputClass: string = 'block w-full text-sm line-height-2';
  isServerSideSearch: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm = (): void => {
    this.loginForm = this.formBuilder.nonNullable.group({
      email: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required),
    });
  };

  get getLoginFormControl() {
    return this.loginForm.controls;
  }

  async onSignIn() {
    try {
      const res = await lastValueFrom(
        this.homeService.login(
          this.loginForm.get('email')?.value,
          this.loginForm.get('password')?.value
        )
      );
      
    } catch (error) {
      console.error(error)
    }
  }
}
