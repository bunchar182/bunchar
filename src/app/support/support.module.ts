import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { AboutusComponent } from '../suppport/page/aboutus/aboutus.component';
import { ContactComponent } from '../suppport/page/contact/contact.component';


@NgModule({
  declarations: [AboutusComponent, ContactComponent],
  imports: [
    CommonModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }
