import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-zone',
  templateUrl: './private-zone.component.html',
  styleUrls: ['./private-zone.component.css']
})
export class PrivateZoneComponent implements OnInit {

  constructor(private afauth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  onSingOutClick() {
    this.afauth.auth.signOut();
    this.router.navigate(['home']);
  }

  onGoto(page: string) {
    this.router.navigate(['admin', page]);
  }
}
