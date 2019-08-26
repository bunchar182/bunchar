import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleformComponent } from './page/simpleform/simpleform.component';
import { AdvformComponent } from './page/advform/advform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './highlight.directive';
import { TrimCreditCardPipe } from './trim-credit-card.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PrivateZoneComponent } from './page/private-zone/private-zone.component';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { DashbordComponent } from './page/dashbord/dashbord.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { PhoneRegisterComponent } from './page/phone-register/phone-register.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { FirestoreexamComponent } from './page/firestoreexam/firestoreexam.component';
import { UploadexamComponent } from './page/uploadexam/uploadexam.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleformComponent,
    AdvformComponent,
    HighlightDirective,
    TrimCreditCardPipe,
    PrivateZoneComponent,
    PublicZoneComponent,
    DashbordComponent,
    RegisterComponent,
    LoginComponent,
    PhoneRegisterComponent,
    FirestoreexamComponent,

    UploadexamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebasesdk),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ProgressbarModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
