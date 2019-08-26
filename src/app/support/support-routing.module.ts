import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from '../suppport/page/aboutus/aboutus.component';
import { ContactComponent } from '../suppport/page/contact/contact.component';


const routes: Routes = [
{
  path: 'aboutus',
  component:AboutusComponent
},{
  path:'contact',
  component:ContactComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
