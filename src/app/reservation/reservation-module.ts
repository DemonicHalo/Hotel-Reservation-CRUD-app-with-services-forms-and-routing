import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationForm } from '../reservation-form/reservation-form';
import { ReservationList } from '../reservation-list/reservation-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from '../home/home-module';
import { Home } from '../home/home';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HomeModule, Home],
})
export class ReservationModule {}
