import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private afauth: AngularFireAuth) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  ngOnInit() {
  }

  onFormSumit() {
    if (this.loginForm.valid) {
      this.afauth.auth.createUserWithEmailAndPassword(
        this.loginForm.get('email').value,
        this.loginForm.get('password').value
      ).then(value => {
        value.user.sendEmailVerification();
       })
        .catch(reason => {
          console.log(reason);
         });
    }
  }

  isEmailValid(): boolean{

    return this.loginForm.get('email').invalid && this.loginForm.dirty;
  }

  // isFildValid(fildName:string):boolean{

  //   return
  // }
}
