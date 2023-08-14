import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RestContrasenaPageRoutingModule } from './rest-contrasena-routing.module';
import { RestContrasenaPage } from './rest-contrasena.page';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestContrasenaPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [RestContrasenaPage]
})
export class RestContrasenaPageModule {}
