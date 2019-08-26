import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SimpleformComponent } from './page/simpleform/simpleform.component';
import { AdvformComponent } from './page/advform/advform.component';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { PrivateZoneComponent } from './page/private-zone/private-zone.component';
import { DashbordComponent } from './page/dashbord/dashbord.component';
import { AuthGuard } from './share/auth.guard';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { PhoneRegisterComponent } from './page/phone-register/phone-register.component';
import { FirestoreexamComponent } from './page/firestoreexam/firestoreexam.component';
import { UploadexamComponent } from './page/uploadexam/uploadexam.component';



const routes: Routes = [
  {
    path: '',
    component: PublicZoneComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'simpleform', component: SimpleformComponent
      },
      {
        path: 'advform', component: AdvformComponent
      },
      {
        path:'support',
        loadChildren:'./support/support.module#SupportModule'
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'phone',
        component:PhoneRegisterComponent
      }
    ]
  },
  {
    path:'admin',
    component:PrivateZoneComponent,
    canActivate:[AuthGuard],
    children:[

      {
        path:'',
        component:DashbordComponent
      },
      {
        path:'firestoreexam',
        component:FirestoreexamComponent
      },{
        path:'uploadexam',
        component:UploadexamComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
