import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-register',
  templateUrl: './phone-register.component.html',
  styleUrls: ['./phone-register.component.css']
})
export class PhoneRegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private afauth: AngularFireAuth, private router: Router) { }

  phoneForm = this.fb.group({
    phoneNo: ['', [Validators.required]]
  });

  otpForm = this.fb.group({
    otp: ['', [Validators.required]]
  });

  confirmResult: firebase.auth.ConfirmationResult;

  ngOnInit() {
  }

  onPhoneSubmit() {
    if (this.phoneForm.valid) {
      this.afauth.auth.signInWithPhoneNumber(
        '+66' + this.phoneForm.get('phoneNo').value,
        new firebase.auth.RecaptchaVerifier('verified-div')
      ).then(value => {
        this.confirmResult = value;
      })
        .catch(reason => {
          console.log(reason);
        });
    }
  }

  onOtpSubmit() {
    if (this.otpForm.valid) {
      this.confirmResult.confirm(
        this.otpForm.get('otp').value)
        .then(value => {
          this.router.navigate(['admin']);
        })
        .catch(reason => {
          console.log(reason);
        });
    }
  }

}
