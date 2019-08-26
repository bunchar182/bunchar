import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isError = false;
  errorMessage = '';
  constructor(
    private fb: FormBuilder,
    private afauth: AngularFireAuth,
    private router: Router) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })
  ngOnInit() {
  }

  onPhoneClick() {
    this.router.navigate(['phone']);
  }

  onFormSubmit() {
    if (this.loginForm.valid) {
      this.afauth.auth.signInWithEmailAndPassword(
        this.loginForm.get('email').value,
        this.loginForm.get('password').value
      ).then(value => {
        this.router.navigate(['admin']);
      })
        .catch(reason => {
          console.log(reason);
          this.errorMessage = reason;
          this.isError = true;
        });
    }
  }

  isEmailValid(fieldName: string): boolean {
    let fieldName1 = this.loginForm.get(fieldName)
    return fieldName1.invalid && fieldName1.dirty;
  }

  onGoogleClick() {
    this.afauth.auth.signInWithRedirect(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  onFacebookClick() {
    this.afauth.auth.signInWithRedirect(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  onGitHubClick() {
    this.afauth.auth.signInWithRedirect(
      new firebase.auth.GithubAuthProvider()
    )
  }

  // isFiledValue(fieldName:string):boolean{

  // }

  onErrorClose(){
    this.isError = false;
    this.errorMessage = '';
  }


}
